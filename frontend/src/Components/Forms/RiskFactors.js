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
            const updateRFForm = async() => {
            const config = {
              headers: {
                  'Content-Type' : 'application/json',
                  'Accept' : 'application/json',
                  'Authorization' : `JWT ${localStorage.getItem('access')}`
              }
          }
          const Body = JSON.stringify(FormData)
          try {
              const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update_risk_data/`, Body ,config)
              // console.log(response.data['formData'])
              setFormData(response.data['formData'])
              
              setSuccessMessage("Assurance Risk data is successfully updated")
              setSuccessMessageVisibility("block")
              setTimeout(() => {
                setSuccessMessageVisibility("none")
              }, 5000)
              // setSubmissionMessageVisibility("block")
          } catch (error) {
              console.log(error)
              
              setUpdateErrorData({
                status: error.response.status,
                message: error.response.statusText
              })
              setUpdateErrorVisibility("block")
          }
      }
      const [Advisor, setAdvisor] = useState("")
      const onSubmit = e => {
        e.preventDefault()
        updateRFForm()
        // window.location.reload();
    }


    useEffect(() => {
        createRFForm(FormData)
        setAdvisor(state["Advisor"])
        // setInterval(updateIPForm, 20000);
    }, [Advisor]);

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

            RF_ClientType : "",
            RF_Occupation : "",
            RF_CountryOfBirth : "",
            RF_CountryOfResidence : "",
            RF_Nationality : "",
            RF_Different_Nationality : "",
            RF_CountryOfTax : "",
            RF_Industry : "",
            RF_SourceOfFunds : "",
            RF_RelationshipToClient : "",
            RF_CountryOfRegistration : "",
            RF_CountryOfOperation : "",
            RF_Type_Legal_Entity : "",
            RF_Industry : "",
            RF_SourceOfFunds : "",
            RF_Client_Relationship : "",
            RF_Product_Name : "",
            RF_Transaction_Flow : "",
            RF_Transaction_Method : "",
            RF_Transaction_Reason : "",
            RF_High_Transaction_Reason : "",
            RF_Transaction_Frequency : "",
            RF_Transaction_Value : "",
            RF_Currency_Value : "",
            RF_Transaction_Geography : "",
            RF_Funds_Jurisdiction : "",
            RF_Delivery_Channel : "",
            RF_Linked_Party_Acting : "",
            RF_Linked_Party_Paying : "",
            RF_Client_Match : "",
            RF_Client_Beneficiaries : "",
            RF_Adjust_Risk1 : "",
            RF_Name : "",
            RF_Client_Relationship : "",
            RF_ID : "",
            RF_Linked_Party : "",
            RF_RCA : "",
            RF_Birth_Country : "",
            RF_Residence_Country : "",
            RF_Nationality1 : "",
            RF_Control1 : "",
            RF_Control2 : "",
            RF_Control3 : "",
            RF_Another_Control1 : "",
            RF_Another_Control2 : "",

            value : "",
            value1 : "",
            value5 : "",
            value6 : "",
            value7 : "RF_ClientType",
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
    


    return(
    <>
    <form onSubmit={e => onSubmit(e)}>
        <br/>
        <div className="notification_container">
            <div className="alert alert-success fade show" style={{display: SuccessMessageVisibility}} role="alert">
            {SuccessMessage}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
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
                        <select className="text-start form-select" id="RF_BU_Risk" name='RF_BU_Risk' value={FormData['RF_BU_Risk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                            <input spellCheck="true" type="date" id="RF_Date" name="RF_Date" value={FormData['RF_Date']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Date"  aria-describedby="" />
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
                            <input spellCheck="true"  id="RF_ClientName" name="RF_ClientName" value={FormData['RF_ClientName']} className="form-control" onChange={(e) => {onChange(e)}}  placeholder="Client Name"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Completed By: Name</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="RF_CompleteByName" name="RF_CompleteByName" value={FormData['RF_CompleteByName']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Name"  aria-describedby="" />
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
                            <input spellCheck="true"  id="RF_EventID" name="RF_EventID" value={FormData['RF_EventID']}  className="form-control" onChange={(e) => {onChange(e)}} placeholder="Event ID"  aria-describedby="" />
                        </div>
                    </div>
                </div>

                <div className="col-6" style={{paddingBottom: "0.5%"}}>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="email" className="col-form-label"><b>Completed By: Role/Designation</b></label>
                        </div>
                        <div className="col-6">
                            <input spellCheck="true"  id="RF_CompleteByRole" name="RF_CompleteByRole" value={FormData['RF_CompleteByRole']} className="form-control" onChange={(e) => {onChange(e)}} placeholder="Role/Designation"  aria-describedby="" />
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
            
                        if(value6==1)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Medium</b></label>
                                </div>

                            </>);
                        }

                        if(value6==2 || value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>High</b></label>
                                </div>

                            </>);
                        }

                        if(value6==3 || value6==6)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Low</b></label>
                                </div>

                            </>);
                        }

                        if(value6==4 || value6==7)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label"><b>Medium</b></label>
                                </div>

                            </>);
                        }

                        if(value6==9 || value6==10) 
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
                        <select className="text-start form-select" name='RF_AdjustedRisk' id='RF_AdjustedRisk' value={FormData['RF_AdjustedRisk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
                            <option value4="0" selected></option>
                            <option value4="1">Low</option>
                            <option value4="2">Medium</option>
                            <option value4="3">High</option>
                            <option value4="4">Intolerable</option>
                        </select>  
                        </div>
 
                        <div className="col-2">
                            <label className="col-form-label"><b>Approvals?</b></label>
                        </div>

                        <div className="col-2"> 
                            <select className="text-start form-select" name='RF_Approvals' id='RF_Approvals' value={FormData['RF_Approvals']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                        
                       if(value==1)
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
                    <select className="text-start form-select" name='RF_GCO_Risk' id='RF_GCO_Risk' value={FormData['RF_GCO_Risk']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                    <label className="col-form-label"></label>
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
                    <select className="text-start form-select" name='RF_ClientType' id='RF_ClientType' value={parseInt(FormData['RF_ClientType'])} onChange={(e)=>{handleChange7(e)}}  aria-label="Default select example">
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
                                
                    if(value7==1)
                    {
                        
                        return (<>
                        <br/>
                        <hr/>
                        <div className="col-2">       
                            <label className="col-form-label">Occupation</label>
                        </div>

                        <div className="col-2">
                            <select className="text-start form-select" name='RF_Occupation' id='RF_Occupation' value={FormData['RF_Occupation']} onChange={(e)=>{handleChange8(e)}}  aria-label="Default select example">
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
                            
                            if(value8==1 || value8==2 || value8==3 || value8==5)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value8==4 || value8==6)
                            {
                                return (<>
                                    
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }
    
                            })()}
                        </div>

                        <div className="col-1">
                        {(() => { 
                            
                            if(value8==1 || value8==2 || value8==3 || value8==5 || value8==4 || value8==6)
                            {
                                return (<>
                                    
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

    
                            })()}
                        </div>

                        <div className="col-2">
                        {(() => { 
                            
                            if(value8==1 || value8==2 || value8==3 || value8==5)
                            {
                                return (<>
                                    
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value8==4 || value8==6)
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
                            <select className="text-start form-select" name='RF_CountryOfBirth' id='RF_CountryOfBirth' value={value9} onChange={handleChange9}  aria-label="Default select example">
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
                            
                            if(value9==1 || value9==2 || value9==3 || value9==4 || value9==6 || value9==8 || value9==10 || value9==13 || value9==16 || value9==17 || value9==19 || value9==20 || value9==24 || value9==27
                                || value9==28 || value9==29 || value9==31 || value9==32 || value9==33 || value9==36 || value9==37 || value9==39 || value9==41 || value9==42 || value9==43 || value9==46 || value9==47 || value9==48 || value9==49 || value9==50 || value9==51 || value9==52 || value9==53
                                || value9==55 || value9==58 || value9==62 || value9==64 || value9==65 || value9==66 || value9==67 || value9==68 || value9==69 || value9==71 || value9==72 || value9==73 || value9==74
                                || value9==82 || value9==85 || value9==86 || value9==90 || value9==91 || value9==92 || value9==93
                                || value9==94 || value9==95 || value9==97 || value9==98 || value9==99 || value9==100 || value9==103 
                                
                                || value9==109  || value9==112  || value9==115  || value9==116  || value9==117  || value9==121  || value9==123  || value9==124
                                || value9==126  || value9==127  || value9==128  || value9==129  || value9==134  || value9==135  || value9==136
                                || value9==139  || value9==143  || value9==145  || value9==146  || value9==148  || value9==150 || value9==151
                                || value9==152 || value9==153 || value9==154 || value9==155 || value9==158 || value9==160 || value9==162 
                                || value9==163 || value9==164 || value9==165 || value9==166 || value9==168 || value9==170 || value9==172 || value9==173 || value9==174 || value9==175 || value9==176 || value9==177
                                || value9==186 || value9==187 || value9==188 || value9==190 || value9==191 || value9==193 || value9==195
                                || value9==197 || value9==198 || value9==200 || value9==202 || value9==203 || value9==206 || value9==208 || value9==209
                                || value9==211 || value9==212 || value9==213 || value9==214 || value9==219 || value9==220 || value9==221 || value9==222 || value9==223 || value9==224
                                || value9==226 || value9==230 || value9==232 || value9==233 || value9==236 || value9==237 || value9==238 || value9==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value9==5 || value9==7 || value9==9 || value9==12 || value9==25 || value9==34 || value9==35 || value9==61 || value9==76 || value9==84 || value9==88
                                
                                || value9==114 || value9==130 || value9==132 || value9==142 || value9==149 || value9==159 || value9==161 
                                || value9==167 || value9==194 || value9==215 || value9==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value9==11 || value9==14 || value9==15 || value9==18 || value9==22 || value9==23 || value9==26 || value9==30 || value9==38 || value9==40 || value9==44 || value9==45
                                || value9==54 || value9==56 || value9==59 || value9==60 || value9==63 || value9==70 || value9==75 || value9==77 || value9==78 || value9==79 || value9==80 || value9==81
                                || value9==83 || value9==87 || value9==89 || value9==96 || value9==101 || value9==104 || value9==105
                                
                                || value9==108 || value9==110 || value9==111 || value9==113 || value9==118 || value9==120 || value9==125
                                || value9==131 || value9==133 ||  value9==137 || value9==138 || value9==140 || value9==141
                                || value9==144 || value9==147 || value9==156 || value9==157 || value9==169 || value9==171 || value9==178 || value9==179 || value9==180 || value9==181 || value9==182 || value9==183
                                || value9==185 || value9==189 || value9==192 || value9==196 || value9==199 || value9==201 || value9==204 || value9==205
                                || value9==207 || value9==210 || value9==218 || value9==225 || value9==231 || value9==234 || value9==235 || value9==237 || value9==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value9==21 || value9==57 || value9==106 || value9==107 || value9==119 || value9==187 || value9==217 )
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
                            
                            if(value9==1 || value9==2 || value9==3 || value9==4 || value9==6 || value9==8 || value9==10 || value9==13 || value9==16 || value9==17 || value9==19 || value9==20 || value9==24
                                || value9==27 || value9==28 || value9==29 || value9==30 || value9==31 || value9==32 || value9==33 || value9==36 || value9==37 || value9==39 || value9==41 || value9==42 || value9==43
                                || value9==46 || value9==47 || value9==48 || value9==49 || value9==50 || value9==51 || value9==52 || value9==53 || value9==55 || value9==58 || value9==62 || value9==64 || value9==65 || value9==66 
                                || value9==67 || value9==68 || value9==69 || value9==70 || value9==71 || value9==72 || value9==73 || value9==74 || value9==82 || value9==85 || value9==86 || value9==90 || value9==91 || value9==92 || value9==93
                                || value9==94 || value9==95 || value9==96 || value9==97 || value9==98 || value9==99 || value9==100 || value9==102 || value9==103
                                
                                || value9==109  || value9==112  || value9==115  || value9==116  || value9==117  || value9==121  || value9==123  || value9==124
                                || value9==126  || value9==127  || value9==128  || value9==129  || value9==134  || value9==135  || value9==136
                                || value9==139  || value9==143  || value9==145  || value9==146  || value9==148  || value9==150 || value9==151
                                || value9==152 || value9==153 || value9==154 || value9==155 || value9==158 || value9==160 || value9==162 
                                || value9==163 || value9==164 || value9==165 || value9==166 || value9==168 || value9==170 || value9==172 || value9==173 || value9==174 || value9==175 || value9==176 || value9==177
                                || value9==186 || value9==187 || value9==188 || value9==190 || value9==191 || value9==193 || value9==195
                                || value9==197 || value9==198 || value9==200 || value9==202 || value9==203 || value9==206 || value9==208 || value9==209
                                || value9==211 || value9==212 || value9==213 || value9==214 || value9==219 || value9==220 || value9==221 || value9==222 || value9==223 || value9==224
                                || value9==226 || value9==230 || value9==232 || value9==233 || value9==236 || value9==237 || value9==238 || value9==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value9==5 || value9==7 || value9==9 || value9==12 || value9==25 || value9==34 || value9==35 || value9==61 || value9==76 || value9==84|| value9==88
                                
                                || value9==114 || value9==130 || value9==132 || value9==142 || value9==149 || value9==159 || value9==161 
                                || value9==167 || value9==194 || value9==215 || value9==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value9==11 || value9==14 || value9==15 || value9==18 || value9==22 || value9==23 || value9==26 || value9==30 || value9==38 || value9==40
                                || value9==44 || value9==45 || value9==54 || value9==56 || value9==59 || value9==60 || value9==63 || value9==70 || value9==75 || value9==77 
                                || value9==78 || value9==79 || value9==80 || value9==81 || value9==83 || value9==87 || value9==89 || value9==96 || value9==97 || value9==98 
                                || value9==99 || value9==100 || value9==101 || value9==102 || value9==104 || value9==105
                                
                                || value9==108 || value9==110 || value9==111 || value9==113 || value9==118 || value9==120 || value9==125
                                || value9==131 || value9==133 ||  value9==137 || value9==138 || value9==140 || value9==141
                                || value9==144 || value9==147 || value9==156 || value9==157 || value9==169 || value9==171 || value9==178 || value9==179 || value9==180 || value9==181 || value9==182 || value9==183
                                || value9==185 || value9==189 || value9==192 || value9==196 || value9==199 || value9==201 || value9==204 || value9==205
                                || value9==207 || value9==210 || value9==218 || value9==225 || value9==231 || value9==234 || value9==235 || value9==237 || value9==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value9==21 || value9==57 || value9==106 || value9==107 || value9==119 || value9==187 || value9==217)
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
                            <select className="text-start form-select" name='RF_CountryOfResidence' id='RF_CountryOfResidence' value={value10} onChange={handleChange10}  aria-label="Default select example">
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
                            
                            if(value10==1 || value10==2 || value10==3 || value10==4 || value10==6 || value10==8 || value10==10 || value10==13 || value10==16 || value10==17 || value10==19 || value10==20 || value10==24 || value10==27
                                || value10==28 || value10==29 || value10==31 || value10==32 || value10==33 || value10==36 || value10==37 || value10==39 || value10==41 || value10==42 || value10==43 || value10==46 || value10==47 || value10==48 || value10==49 || value10==50 || value10==51 || value10==52 || value10==53
                                || value10==55 || value10==58 || value10==62 || value10==64 || value10==65 || value10==66 || value10==67 || value10==68 || value10==69 || value10==71 || value10==72 || value10==73 || value10==74
                                || value10==82 || value10==85 || value10==86 || value10==90 || value10==91 || value10==92 || value10==93
                                || value10==94 || value10==95 || value10==97 || value10==98 || value10==99 || value10==100 || value10==103 
                                
                                || value10==109  || value10==112  || value10==115  || value10==116  || value10==117  || value10==121  || value10==123  || value10==124
                                || value10==126  || value10==127  || value10==128  || value10==129  || value10==134  || value10==135  || value10==136
                                || value10==139  || value10==143  || value10==145  || value10==146  || value10==148  || value10==150 || value10==151
                                || value10==152 || value10==153 || value10==154 || value10==155 || value10==158 || value10==160 || value10==162 
                                || value10==163 || value10==164 || value10==165 || value10==166 || value10==168 || value10==170 || value10==172 || value10==173 || value10==174 || value10==175 || value10==176 || value10==177
                                || value10==186 || value10==187 || value10==188 || value10==190 || value10==191 || value10==193 || value10==195
                                || value10==197 || value10==198 || value10==200 || value10==202 || value10==203 || value10==206 || value10==208 || value10==209
                                || value10==211 || value10==212 || value10==213 || value10==214 || value10==219 || value10==220 || value10==221 || value10==222 || value10==223 || value10==224
                                || value10==226 || value10==230 || value10==232 || value10==233 || value10==236 || value10==237 || value10==238 || value10==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value10==5 || value10==7 || value10==9 || value10==12 || value10==25 || value10==34 || value10==35 || value10==61 || value10==76 || value10==84 || value10==88
                                
                                || value10==114 || value10==130 || value10==132 || value10==142 || value10==149 || value10==159 || value10==161 
                                || value10==167 || value10==194 || value10==215 || value10==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value10==11 || value10==14 || value10==15 || value10==18 || value10==22 || value10==23 || value10==26 || value10==30 || value10==38 || value10==40 || value10==44 || value10==45
                                || value10==54 || value10==56 || value10==59 || value10==60 || value10==63 || value10==70 || value10==75 || value10==77 || value10==78 || value10==79 || value10==80 || value10==81
                                || value10==83 || value10==87 || value10==89 || value10==96 || value10==101 || value10==104 || value10==105
                                
                                || value10==108 || value10==110 || value10==111 || value10==113 || value10==118 || value10==120 || value10==125
                                || value10==131 || value10==133 ||  value10==137 || value10==138 || value10==140 || value10==141
                                || value10==144 || value10==147 || value10==156 || value10==157 || value10==169 || value10==171 || value10==178 || value10==179 || value10==180 || value10==181 || value10==182 || value10==183
                                || value10==185 || value10==189 || value10==192 || value10==196 || value10==199 || value10==201 || value10==204 || value10==205
                                || value10==207 || value10==210 || value10==218 || value10==225 || value10==231 || value10==234 || value10==235 || value10==237 || value10==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value10==21 || value10==57 || value10==106 || value10==107 || value10==119 || value10==187 || value10==217 )
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
                            
                            if(value10==1 || value10==2 || value10==3 || value10==4 || value10==6 || value10==8 || value10==10 || value10==13 || value10==16 || value10==17 || value10==19 || value10==20 || value10==24
                                || value10==27 || value10==28 || value10==29 || value10==30 || value10==31 || value10==32 || value10==33 || value10==36 || value10==37 || value10==39 || value10==41 || value10==42 || value10==43
                                || value10==46 || value10==47 || value10==48 || value10==49 || value10==50 || value10==51 || value10==52 || value10==53 || value10==55 || value10==58 || value10==62 || value10==64 || value10==65 || value10==66 
                                || value10==67 || value10==68 || value10==69 || value10==70 || value10==71 || value10==72 || value10==73 || value10==74 || value10==82 || value10==85 || value10==86 || value10==90 || value10==91 || value10==92 || value10==93
                                || value10==94 || value10==95 || value10==96 || value10==97 || value10==98 || value10==99 || value10==100 || value10==102 || value10==103
                                
                                || value10==109  || value10==112  || value10==115  || value10==116  || value10==117  || value10==121  || value10==123  || value10==124
                                || value10==126  || value10==127  || value10==128  || value10==129  || value10==134  || value10==135  || value10==136
                                || value10==139  || value10==143  || value10==145  || value10==146  || value10==148  || value10==150 || value10==151
                                || value10==152 || value10==153 || value10==154 || value10==155 || value10==158 || value10==160 || value10==162 
                                || value10==163 || value10==164 || value10==165 || value10==166 || value10==168 || value10==170 || value10==172 || value10==173 || value10==174 || value10==175 || value10==176 || value10==177
                                || value10==186 || value10==187 || value10==188 || value10==190 || value10==191 || value10==193 || value10==195
                                || value10==197 || value10==198 || value10==200 || value10==202 || value10==203 || value10==206 || value10==208 || value10==209
                                || value10==211 || value10==212 || value10==213 || value10==214 || value10==219 || value10==220 || value10==221 || value10==222 || value10==223 || value10==224
                                || value10==226 || value10==230 || value10==232 || value10==233 || value10==236 || value10==237 || value10==238 || value10==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value10==5 || value10==7 || value10==9 || value10==12 || value10==25 || value10==34 || value10==35 || value10==61 || value10==76 || value10==84|| value10==88
                                
                                || value10==114 || value10==130 || value10==132 || value10==142 || value10==149 || value10==159 || value10==161 
                                || value10==167 || value10==194 || value10==215 || value10==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value10==11 || value10==14 || value10==15 || value10==18 || value10==22 || value10==23 || value10==26 || value10==30 || value10==38 || value10==40
                                || value10==44 || value10==45 || value10==54 || value10==56 || value10==59 || value10==60 || value10==63 || value10==70 || value10==75 || value10==77 
                                || value10==78 || value10==79 || value10==80 || value10==81 || value10==83 || value10==87 || value10==89 || value10==96 || value10==97 || value10==98 
                                || value10==99 || value10==100 || value10==101 || value10==102 || value10==104 || value10==105
                                
                                || value10==108 || value10==110 || value10==111 || value10==113 || value10==118 || value10==120 || value10==125
                                || value10==131 || value10==133 ||  value10==137 || value10==138 || value10==140 || value10==141
                                || value10==144 || value10==147 || value10==156 || value10==157 || value10==169 || value10==171 || value10==178 || value10==179 || value10==180 || value10==181 || value10==182 || value10==183
                                || value10==185 || value10==189 || value10==192 || value10==196 || value10==199 || value10==201 || value10==204 || value10==205
                                || value10==207 || value10==210 || value10==218 || value10==225 || value10==231 || value10==234 || value10==235 || value10==237 || value10==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value10==21 || value10==57 || value10==106 || value10==107 || value10==119 || value10==187 || value10==217)
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
                            <select className="text-start form-select" name='RF_Nationality' id='RF_Nationality' value={value11} onChange={handleChange11}  aria-label="Default select example">
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
                            
                            if(value11==1 || value11==2 || value11==3 || value11==4 || value11==6 || value11==8 || value11==10 || value11==13 || value11==16 || value11==17 || value11==19 || value11==20 || value11==24 || value11==27
                                || value11==28 || value11==29 || value11==31 || value11==32 || value11==33 || value11==36 || value11==37 || value11==39 || value11==41 || value11==42 || value11==43 || value11==46 || value11==47 || value11==48 || value11==49 || value11==50 || value11==51 || value11==52 || value11==53
                                || value11==55 || value11==58 || value11==62 || value11==64 || value11==65 || value11==66 || value11==67 || value11==68 || value11==69 || value11==71 || value11==72 || value11==73 || value11==74
                                || value11==82 || value11==85 || value11==86 || value11==90 || value11==91 || value11==92 || value11==93
                                || value11==94 || value11==95 || value11==97 || value11==98 || value11==99 || value11==100 || value11==103 
                                
                                || value11==109  || value11==112  || value11==115  || value11==116  || value11==117  || value11==121  || value11==123  || value11==124
                                || value11==126  || value11==127  || value11==128  || value11==129  || value11==134  || value11==135  || value11==136
                                || value11==139  || value11==143  || value11==145  || value11==146  || value11==148  || value11==150 || value11==151
                                || value11==152 || value11==153 || value11==154 || value11==155 || value11==158 || value11==160 || value11==162 
                                || value11==163 || value11==164 || value11==165 || value11==166 || value11==168 || value11==170 || value11==172 || value11==173 || value11==174 || value11==175 || value11==176 || value11==177
                                || value11==186 || value11==187 || value11==188 || value11==190 || value11==191 || value11==193 || value11==195
                                || value11==197 || value11==198 || value11==200 || value11==202 || value11==203 || value11==206 || value11==208 || value11==209
                                || value11==211 || value11==212 || value11==213 || value11==214 || value11==219 || value11==220 || value11==221 || value11==222 || value11==223 || value11==224
                                || value11==226 || value11==230 || value11==232 || value11==233 || value11==236 || value11==237 || value11==238 || value11==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value11==5 || value11==7 || value11==9 || value11==12 || value11==25 || value11==34 || value11==35 || value11==61 || value11==76 || value11==84 || value==88
                                
                                || value11==114 || value11==130 || value11==132 || value11==142 || value11==149 || value11==159 || value11==161 
                                || value11==167 || value11==194 || value11==215 || value11==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value11==11 || value11==14 || value11==15 || value11==18 || value11==22 || value11==23 || value11==26 || value11==30 || value11==38 || value11==40 || value11==44 || value11==45
                                || value11==54 || value11==56 || value11==59 || value11==60 || value11==63 || value11==70 || value11==75 || value11==77 || value11==78 || value11==79 || value11==80 || value11==81
                                || value11==83 || value11==87 || value11==89 || value11==96 || value11==101 || value11==104 || value11==105
                                
                                || value11==108 || value11==110 || value11==111 || value11==113 || value11==118 || value11==120 || value11==125
                                || value11==131 || value11==133 || value11==137 || value11==138 || value11==140 || value11==141
                                || value11==144 || value11==147 || value11==156 || value11==157 || value11==169 || value11==171 || value11==178 || value11==179 || value11==180 || value11==181 || value11==182 || value11==183
                                || value11==185 || value11==189 || value11==192 || value11==196 || value11==199 || value11==201 || value11==204 || value11==205
                                || value11==207 || value11==210 || value11==218 || value11==225 || value11==231 || value11==234 || value11==235 || value11==237 || value11==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value11==21 || value11==57 || value11==106 || value11==107 || value11==119 || value11==187 || value11==217 )
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
                            
                            if(value11==1 || value11==2 || value11==3 || value11==4 || value11==6 || value11==8 || value11==10 || value11==13 || value11==16 || value11==17 || value11==19 || value11==20 || value11==24
                                || value11==27 || value11==28 || value11==29 || value11==30 || value11==31 || value11==32 || value11==33 || value11==36 || value11==37 || value11==39 || value11==41 || value11==42 || value11==43
                                || value11==46 || value11==47 || value11==48 || value11==49 || value11==50 || value11==51 || value11==52 || value11==53 || value11==55 || value11==58 || value11==62 || value11==64 || value11==65 || value11==66 
                                || value11==67 || value11==68 || value11==69 || value11==70 || value11==71 || value11==72 || value11==73 || value11==74 || value11==82 || value11==85 || value11==86 || value11==90 || value11==91 || value11==92 || value11==93
                                || value11==94 || value11==95 || value11==96 || value11==97 || value11==98 || value11==99 || value11==100 || value11==102 || value11==103
                                
                                || value11==109  || value11==112  || value11==115  || value11==116  || value11==117  || value11==121  || value11==123  || value11==124
                                || value11==126  || value11==127  || value11==128  || value11==129  || value11==134  || value11==135  || value11==136
                                || value11==139  || value11==143  || value11==145  || value11==146  || value11==148  || value11==150 || value11==151
                                || value11==152 || value11==153 || value11==154 || value11==155 || value11==158 || value11==160 || value11==162 
                                || value11==163 || value11==164 || value11==165 || value11==166 || value11==168 || value11==170 || value11==172 || value11==173 || value11==174 || value11==175 || value11==176 || value11==177
                                || value11==186 || value11==187 || value11==188 || value11==190 || value11==191 || value11==193 || value11==195
                                || value11==197 || value11==198 || value11==200 || value11==202 || value11==203 || value11==206 || value11==208 || value11==209
                                || value11==211 || value11==212 || value11==213 || value11==214 || value11==219 || value11==220 || value11==221 || value11==222 || value11==223 || value11==224
                                || value11==226 || value11==230 || value11==232 || value11==233 || value11==236 || value11==237 || value11==238 || value11==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value11==5 || value11==7 || value11==9 || value11==12 || value11==25 || value11==34 || value11==35 || value11==61 || value11==76 || value11==84|| value11==88
                                
                                || value11==114 || value11==130 || value11==132 || value11==142 || value11==149 || value11==159 || value11==161 
                                || value11==167 || value11==194 || value11==215 || value11==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value11==11 || value11==14 || value11==15 || value11==18 || value11==22 || value11==23 || value11==26 || value11==30 || value11==38 || value11==40
                                || value11==44 || value11==45 || value11==54 || value11==56 || value11==59 || value11==60 || value11==63 || value11==70 || value11==75 || value11==77 
                                || value11==78 || value11==79 || value11==80 || value11==81 || value11==83 || value11==87 || value11==89 || value11==96 || value11==97 || value11==98 
                                || value11==99 || value11==100 || value11==101 || value11==102 || value11==104 || value11==105
                                
                                || value11==108 || value11==110 || value11==111 || value11==113 || value11==118 || value11==120 || value11==125
                                || value11==131 || value11==133 ||  value11==137 || value11==138 || value11==140 || value11==141
                                || value11==144 || value11==147 || value11==156 || value11==157 || value11==169 || value11==171 || value11==178 || value11==179 || value11==180 || value11==181 || value11==182 || value11==183
                                || value11==185 || value11==189 || value11==192 || value11==196 || value11==199 || value11==201 || value11==204 || value11==205
                                || value11==207 || value11==210 || value11==218 || value11==225 || value11==231 || value11==234 || value11==235 || value11==237 || value11==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value11==21 || value11==57 || value11==106 || value11==107 || value11==119 || value11==187 || value11==217)
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
                            <select className="text-start form-select" name='RF_Different_Nationality' id='RF_Different_Nationality' value={value12} onChange={handleChange12}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                       

                        
                        {(() => { 
                            
                            if(value12==1)
                            {
                                return (<>
                                     
                                     <br/>
                                    <hr/>
                                    <div className="col-2">       
                                        <label className="col-form-label">Country of tax residence</label>
                                    </div>

                                    <div className="col-2">
                                    <select className="text-start form-select" name='RF_CountryOfTax' id='RF_CountryOfTax' value={value13} onChange={handleChange13}  aria-label="Default select example">
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
                            
                            if(value13==1 || value13==2 || value13==3 || value13==4 || value13==6 || value13==8 || value13==10 || value13==13 || value13==16 || value13==17 || value13==19 || value13==20 || value13==24 || value13==27
                                || value13==28 || value13==29 || value13==31 || value13==32 || value13==33 || value13==36 || value13==37 || value13==39 || value13==41 || value13==42 || value13==43 || value13==46 || value13==47 || value13==48 || value13==49 || value13==50 || value13==51 || value13==52 || value13==53
                                || value13==55 || value13==58 || value13==62 || value13==64 || value13==65 || value13==66 || value13==67 || value13==68 || value13==69 || value13==71 || value13==72 || value13==73 || value13==74
                                || value13==82 || value13==85 || value13==86 || value13==90 || value13==91 || value13==92 || value13==93
                                || value13==94 || value13==95 || value13==97 || value13==98 || value13==99 || value13==100 || value13==103 
                                
                                || value13==109  || value13==112  || value13==115  || value13==116  || value13==117  || value13==121  || value13==123  || value13==124
                                || value13==126  || value13==127  || value13==128  || value13==129  || value13==134  || value13==135  || value13==136
                                || value13==139  || value13==143  || value13==145  || value13==146  || value13==148  || value13==150 || value13==151
                                || value13==152 || value13==153 || value13==154 || value13==155 || value13==158 || value13==160 || value13==162 
                                || value13==163 || value13==164 || value13==165 || value13==166 || value13==168 || value13==170 || value13==172 || value13==173 || value13==174 || value13==175 || value13==176 || value13==177
                                || value13==186 || value13==187 || value13==188 || value13==190 || value13==191 || value13==193 || value13==195
                                || value13==197 || value13==198 || value13==200 || value13==202 || value13==203 || value13==206 || value13==208 || value13==209
                                || value13==211 || value13==212 || value13==213 || value13==214 || value13==219 || value13==220 || value13==221 || value13==222 || value13==223 || value13==224
                                || value13==226 || value13==230 || value13==232 || value13==233 || value13==236 || value13==237 || value13==238 || value13==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value13==5 || value13==7 || value13==9 || value13==12 || value13==25 || value13==34 || value13==35 || value13==61 || value13==76 || value13==84 || value13==88
                                
                                || value13==114 || value13==130 || value13==132 || value13==142 || value13==149 || value13==159 || value13==161 
                                || value13==167 || value13==194 || value13==215 || value13==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value13==11 || value13==14 || value13==15 || value13==18 || value13==22 || value13==23 || value13==26 || value13==30 || value13==38 || value13==40 || value13==44 || value13==45
                                || value13==54 || value13==56 || value13==59 || value13==60 || value13==63 || value13==70 || value13==75 || value13==77 || value13==78 || value13==79 || value13==80 || value13==81
                                || value13==83 || value13==87 || value13==89 || value13==96 || value13==101 || value13==104 || value13==105
                                
                                || value13==108 || value13==110 || value13==111 || value13==113 || value13==118 || value13==120 || value13==125
                                || value13==131 || value13==133 || value13==137 || value13==138 || value13==140 || value13==141
                                || value13==144 || value13==147 || value13==156 || value13==157 || value13==169 || value13==171 || value13==178 || value13==179 || value13==180 || value13==181 || value13==182 || value13==183
                                || value13==185 || value13==189 || value13==192 || value13==196 || value13==199 || value13==201 || value13==204 || value13==205
                                || value13==207 || value13==210 || value13==218 || value13==225 || value13==231 || value13==234 || value13==235 || value13==237 || value13==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value13==21 || value13==57 || value13==106 || value13==107 || value13==119 || value13==187 || value13==217 )
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
                            
                            if(value13==1 || value13==2 || value13==3 || value13==4 || value13==6 || value13==8 || value13==10 || value13==13 || value13==16 || value13==17 || value13==19 || value13==20 || value13==24
                                || value13==27 || value13==28 || value13==29 || value13==30 || value13==31 || value13==32 || value13==33 || value13==36 || value13==37 || value13==39 || value13==41 || value13==42 || value13==43
                                || value13==46 || value13==47 || value13==48 || value13==49 || value13==50 || value13==51 || value13==52 || value13==53 || value13==55 || value13==58 || value13==62 || value13==64 || value13==65 || value13==66 
                                || value13==67 || value13==68 || value13==69 || value13==70 || value13==71 || value13==72 || value13==73 || value13==74 || value13==82 || value13==85 || value13==86 || value13==90 || value13==91 || value13==92 || value13==93
                                || value13==94 || value13==95 || value13==96 || value13==97 || value13==98 || value13==99 || value13==100 || value13==102 || value13==103
                                
                                || value13==109  || value13==112  || value13==115  || value13==116  || value13==117  || value13==121  || value13==123  || value13==124
                                || value13==126  || value13==127  || value13==128  || value13==129  || value13==134  || value13==135  || value13==136
                                || value13==139  || value13==143  || value13==145  || value13==146  || value13==148  || value13==150 || value13==151
                                || value13==152 || value13==153 || value13==154 || value13==155 || value13==158 || value13==160 || value13==162 
                                || value13==163 || value13==164 || value13==165 || value13==166 || value13==168 || value13==170 || value13==172 || value13==173 || value13==174 || value13==175 || value13==176 || value13==177
                                || value13==186 || value13==187 || value13==188 || value13==190 || value13==191 || value13==193 || value13==195
                                || value13==197 || value13==198 || value13==200 || value13==202 || value13==203 || value13==206 || value13==208 || value13==209
                                || value13==211 || value13==212 || value13==213 || value13==214 || value13==219 || value13==220 || value13==221 || value13==222 || value13==223 || value13==224
                                || value13==226 || value13==230 || value13==232 || value13==233 || value13==236 || value13==237 || value13==238 || value13==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value13==5 || value13==7 || value13==9 || value13==12 || value13==25 || value13==34 || value13==35 || value13==61 || value13==76 || value13==84|| value13==88
                                
                                || value13==114 || value13==130 || value13==132 || value13==142 || value13==149 || value13==159 || value13==161 
                                || value13==167 || value13==194 || value13==215 || value13==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value13==11 || value13==14 || value13==15 || value13==18 || value13==22 || value13==23 || value13==26 || value13==30 || value13==38 || value13==40
                                || value13==44 || value13==45 || value13==54 || value13==56 || value13==59 || value13==60 || value13==63 || value13==70 || value13==75 || value13==77 
                                || value13==78 || value13==79 || value13==80 || value13==81 || value13==83 || value13==87 || value13==89 || value13==96 || value13==97 || value13==98 
                                || value13==99 || value13==100 || value13==101 || value13==102 || value13==104 || value13==105
                                
                                || value13==108 || value13==110 || value13==111 || value13==113 || value13==118 || value13==120 || value13==125
                                || value13==131 || value13==133 ||  value13==137 || value13==138 || value13==140 || value13==141
                                || value13==144 || value13==147 || value13==156 || value13==157 || value13==169 || value13==171 || value13==178 || value13==179 || value13==180 || value13==181 || value13==182 || value13==183
                                || value13==185 || value13==189 || value13==192 || value13==196 || value13==199 || value13==201 || value13==204 || value13==205
                                || value13==207 || value13==210 || value13==218 || value13==225 || value13==231 || value13==234 || value13==235 || value13==237 || value13==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value13==21 || value13==57 || value13==106 || value13==107 || value13==119 || value13==187 || value13==217)
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
                            <select className="text-start form-select" name='RF_Industry' id='RF_Industry' value={value14} onChange={handleChange14}  aria-label="Default select example">
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
                            
                            if(value14==1 || value14==3 || value14==15 || value14==19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value14==2 || value14==12 || value14==14 || value14==16 || value14==17 || value14==20 || value14==23 || value14==24
                                || value14==26 || value14==27 || value14==28 || value14==30 || value14==34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value14==4 || value14==5 || value14==6 || value14==7 || value14==8 || value14==9 || value14==10 || value14==11 || value14==13
                                || value14==18 || value14==21 || value14==22 || value14==29 || value14==32 || value14==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value14==25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            else if(value14==31)
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
                            
                            if(value14==1 || value14==3 || value14==15 || value14==19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value14==25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                            else if(value14==2 || value14==12 || value14==14 || value14==16 || value14==17 || value14==20 || value14==23 || value14==24
                                || value14==26 || value14==27 || value14==28 || value14==30 || value14==34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value14==4 || value14==5 || value14==6 || value14==7 || value14==8 || value14==9 || value14==10 || value14==11 || value14==13
                                || value14==18 || value14==21 || value14==22 || value14==29 || value14==32 || value14==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value14==31)
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
                            <select className="text-start form-select" name='RF_SourceOfFunds'  id='RF_SourceOfFunds' value={value15} onChange={handleChange15}  aria-label="Default select example">
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
                            
                            if(value15==1 || value15==6 || value15==12 || value15==13 || value15==16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value15==2 || value15==3 || value15==8 || value15==9 || value15==14 || value15==17 || value15==18 || value15==20
                                || value15==22 || value15==23 || value15==25 || value15==26 || value15==29 || value15==31 || value15==32 || value15==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value15==4 || value15==5 || value15==7 || value15==10 || value15==11 || value15==15 || value15==19 || value15==24
                                || value15==27 || value15==28 || value15==30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value15==21)
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
                            
                            if(value15==1 || value15==6 || value15==12 || value15==13 || value15==16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value15==2 || value15==3 || value15==8 || value15==9 || value15==14 || value15==17 || value15==18 || value15==20
                               || value15==22 || value15==23 || value15==25 || value15==26 || value15==29 || value15==31 || value15==32 || value15==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value15==4 || value15==5 || value15==7 || value15==10 || value15==11 || value15==15 || value15==19 || value15==24
                                || value15==27 || value15==28 || value15==30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value15==21)
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
                            <select className="text-start form-select" name='RF_RelationshipToClient' id='RF_RelationshipToClient' value={value16} onChange={handleChange16}  aria-label="Default select example">
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
                            
                            if(value16==1 || value16==2 || value16==4 || value16==6 || value16==7 || value16==9 || value16==11
                                || value16==13 || value16==15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value16==3 || value16==5 || value16==8 || value16==10 || value16==12 || value16==14 || value16==16)
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
                            
                            if(value16==1 || value16==2 || value16==4 || value16==6 || value16==7 || value16==9 || value16==11 
                            || value16==13 || value16==15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value16==3 || value16==5 || value16==8 || value16==10 || value16==12 || value16==14 || value16==16)
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
                                
                    if(value7==2)
                    {
                        
                        return (<>
                        <br/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Country of registration</label>
                        </div>

                        <div className="col-2">
                            <select className="text-start form-select" name='RF_CountryOfRegistration' id='RF_CountryOfRegistration' value={value9} onChange={handleChange9}  aria-label="Default select example">
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
                            
                            if(value9==1 || value9==2 || value9==3 || value9==4 || value9==6 || value9==8 || value9==10 || value9==13 || value9==16 || value9==17 || value9==19 || value9==20 || value9==24 || value9==27
                                || value9==28 || value9==29 || value9==31 || value9==32 || value9==33 || value9==36 || value9==37 || value9==39 || value9==41 || value9==42 || value9==43 || value9==46 || value9==47 || value9==48 || value9==49 || value9==50 || value9==51 || value9==52 || value9==53
                                || value9==55 || value9==58 || value9==62 || value9==64 || value9==65 || value9==66 || value9==67 || value9==68 || value9==69 || value9==71 || value9==72 || value9==73 || value9==74
                                || value9==82 || value9==85 || value9==86 || value9==90 || value9==91 || value9==92 || value9==93
                                || value9==94 || value9==95 || value9==97 || value9==98 || value9==99 || value9==100 || value9==103 
                                
                                || value9==109  || value9==112  || value9==115  || value9==116  || value9==117  || value9==121  || value9==123  || value9==124
                                || value9==126  || value9==127  || value9==128  || value9==129  || value9==134  || value9==135  || value9==136
                                || value9==139  || value9==143  || value9==145  || value9==146  || value9==148  || value9==150 || value9==151
                                || value9==152 || value9==153 || value9==154 || value9==155 || value9==158 || value9==160 || value9==162 
                                || value9==163 || value9==164 || value9==165 || value9==166 || value9==168 || value9==170 || value9==172 || value9==173 || value9==174 || value9==175 || value9==176 || value9==177
                                || value9==186 || value9==187 || value9==188 || value9==190 || value9==191 || value9==193 || value9==195
                                || value9==197 || value9==198 || value9==200 || value9==202 || value9==203 || value9==206 || value9==208 || value9==209
                                || value9==211 || value9==212 || value9==213 || value9==214 || value9==219 || value9==220 || value9==221 || value9==222 || value9==223 || value9==224
                                || value9==226 || value9==230 || value9==232 || value9==233 || value9==236 || value9==237 || value9==238 || value9==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value9==5 || value9==7 || value9==9 || value9==12 || value9==25 || value9==34 || value9==35 || value9==61 || value9==76 || value9==84 || value9==88
                                
                                || value9==114 || value9==130 || value9==132 || value9==142 || value9==149 || value9==159 || value9==161 
                                || value9==167 || value9==194 || value9==215 || value9==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value9==11 || value9==14 || value9==15 || value9==18 || value9==22 || value9==23 || value9==26 || value9==30 || value9==38 || value9==40 || value9==44 || value9==45
                                || value9==54 || value9==56 || value9==59 || value9==60 || value9==63 || value9==70 || value9==75 || value9==77 || value9==78 || value9==79 || value9==80 || value9==81
                                || value9==83 || value9==87 || value9==89 || value9==96 || value9==101 || value9==104 || value9==105
                                
                                || value9==108 || value9==110 || value9==111 || value9==113 || value9==118 || value9==120 || value9==125
                                || value9==131 || value9==133 ||  value9==137 || value9==138 || value9==140 || value9==141
                                || value9==144 || value9==147 || value9==156 || value9==157 || value9==169 || value9==171 || value9==178 || value9==179 || value9==180 || value9==181 || value9==182 || value9==183
                                || value9==185 || value9==189 || value9==192 || value9==196 || value9==199 || value9==201 || value9==204 || value9==205
                                || value9==207 || value9==210 || value9==218 || value9==225 || value9==231 || value9==234 || value9==235 || value9==237 || value9==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value9==21 || value9==57 || value9==106 || value9==107 || value9==119 || value9==187 || value9==217 )
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
                            
                            if(value9==1 || value9==2 || value9==3 || value9==4 || value9==6 || value9==8 || value9==10 || value9==13 || value9==16 || value9==17 || value9==19 || value9==20 || value9==24
                                || value9==27 || value9==28 || value9==29 || value9==30 || value9==31 || value9==32 || value9==33 || value9==36 || value9==37 || value9==39 || value9==41 || value9==42 || value9==43
                                || value9==46 || value9==47 || value9==48 || value9==49 || value9==50 || value9==51 || value9==52 || value9==53 || value9==55 || value9==58 || value9==62 || value9==64 || value9==65 || value9==66 
                                || value9==67 || value9==68 || value9==69 || value9==70 || value9==71 || value9==72 || value9==73 || value9==74 || value9==82 || value9==85 || value9==86 || value9==90 || value9==91 || value9==92 || value9==93
                                || value9==94 || value9==95 || value9==96 || value9==97 || value9==98 || value9==99 || value9==100 || value9==102 || value9==103
                                
                                || value9==109  || value9==112  || value9==115  || value9==116  || value9==117  || value9==121  || value9==123  || value9==124
                                || value9==126  || value9==127  || value9==128  || value9==129  || value9==134  || value9==135  || value9==136
                                || value9==139  || value9==143  || value9==145  || value9==146  || value9==148  || value9==150 || value9==151
                                || value9==152 || value9==153 || value9==154 || value9==155 || value9==158 || value9==160 || value9==162 
                                || value9==163 || value9==164 || value9==165 || value9==166 || value9==168 || value9==170 || value9==172 || value9==173 || value9==174 || value9==175 || value9==176 || value9==177
                                || value9==186 || value9==187 || value9==188 || value9==190 || value9==191 || value9==193 || value9==195
                                || value9==197 || value9==198 || value9==200 || value9==202 || value9==203 || value9==206 || value9==208 || value9==209
                                || value9==211 || value9==212 || value9==213 || value9==214 || value9==219 || value9==220 || value9==221 || value9==222 || value9==223 || value9==224
                                || value9==226 || value9==230 || value9==232 || value9==233 || value9==236 || value9==237 || value9==238 || value9==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value9==5 || value9==7 || value9==9 || value9==12 || value9==25 || value9==34 || value9==35 || value9==61 || value9==76 || value9==84|| value9==88
                                
                                || value9==114 || value9==130 || value9==132 || value9==142 || value9==149 || value9==159 || value9==161 
                                || value9==167 || value9==194 || value9==215 || value9==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value9==11 || value9==14 || value9==15 || value9==18 || value9==22 || value9==23 || value9==26 || value9==30 || value9==38 || value9==40
                                || value9==44 || value9==45 || value9==54 || value9==56 || value9==59 || value9==60 || value9==63 || value9==70 || value9==75 || value9==77 
                                || value9==78 || value9==79 || value9==80 || value9==81 || value9==83 || value9==87 || value9==89 || value9==96 || value9==97 || value9==98 
                                || value9==99 || value9==100 || value9==101 || value9==102 || value9==104 || value9==105
                                
                                || value9==108 || value9==110 || value9==111 || value9==113 || value9==118 || value9==120 || value9==125
                                || value9==131 || value9==133 ||  value9==137 || value9==138 || value9==140 || value9==141
                                || value9==144 || value9==147 || value9==156 || value9==157 || value9==169 || value9==171 || value9==178 || value9==179 || value9==180 || value9==181 || value9==182 || value9==183
                                || value9==185 || value9==189 || value9==192 || value9==196 || value9==199 || value9==201 || value9==204 || value9==205
                                || value9==207 || value9==210 || value9==218 || value9==225 || value9==231 || value9==234 || value9==235 || value9==237 || value9==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value9==21 || value9==57 || value9==106 || value9==107 || value9==119 || value9==187 || value9==217)
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
                            <select className="text-start form-select" name='RF_CountryOfOperation' id='RF_CountryOfOperation' value={value10} onChange={handleChange10}  aria-label="Default select example">
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
                            
                            if(value10==1 || value10==2 || value10==3 || value10==4 || value10==6 || value10==8 || value10==10 || value10==13 || value10==16 || value10==17 || value10==19 || value10==20 || value10==24 || value10==27
                                || value10==28 || value10==29 || value10==31 || value10==32 || value10==33 || value10==36 || value10==37 || value10==39 || value10==41 || value10==42 || value10==43 || value10==46 || value10==47 || value10==48 || value10==49 || value10==50 || value10==51 || value10==52 || value10==53
                                || value10==55 || value10==58 || value10==62 || value10==64 || value10==65 || value10==66 || value10==67 || value10==68 || value10==69 || value10==71 || value10==72 || value10==73 || value10==74
                                || value10==82 || value10==85 || value10==86 || value10==90 || value10==91 || value10==92 || value10==93
                                || value10==94 || value10==95 || value10==97 || value10==98 || value10==99 || value10==100 || value10==103 
                                
                                || value10==109  || value10==112  || value10==115  || value10==116  || value10==117  || value10==121  || value10==123  || value10==124
                                || value10==126  || value10==127  || value10==128  || value10==129  || value10==134  || value10==135  || value10==136
                                || value10==139  || value10==143  || value10==145  || value10==146  || value10==148  || value10==150 || value10==151
                                || value10==152 || value10==153 || value10==154 || value10==155 || value10==158 || value10==160 || value10==162 
                                || value10==163 || value10==164 || value10==165 || value10==166 || value10==168 || value10==170 || value10==172 || value10==173 || value10==174 || value10==175 || value10==176 || value10==177
                                || value10==186 || value10==187 || value10==188 || value10==190 || value10==191 || value10==193 || value10==195
                                || value10==197 || value10==198 || value10==200 || value10==202 || value10==203 || value10==206 || value10==208 || value10==209
                                || value10==211 || value10==212 || value10==213 || value10==214 || value10==219 || value10==220 || value10==221 || value10==222 || value10==223 || value10==224
                                || value10==226 || value10==230 || value10==232 || value10==233 || value10==236 || value10==237 || value10==238 || value10==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value10==5 || value10==7 || value10==9 || value10==12 || value10==25 || value10==34 || value10==35 || value10==61 || value10==76 || value10==84 || value10==88
                                
                                || value10==114 || value10==130 || value10==132 || value10==142 || value10==149 || value10==159 || value10==161 
                                || value10==167 || value10==194 || value10==215 || value10==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value10==11 || value10==14 || value10==15 || value10==18 || value10==22 || value10==23 || value10==26 || value10==30 || value10==38 || value10==40 || value10==44 || value10==45
                                || value10==54 || value10==56 || value10==59 || value10==60 || value10==63 || value10==70 || value10==75 || value10==77 || value10==78 || value10==79 || value10==80 || value10==81
                                || value10==83 || value10==87 || value10==89 || value10==96 || value10==101 || value10==104 || value10==105
                                
                                || value10==108 || value10==110 || value10==111 || value10==113 || value10==118 || value10==120 || value10==125
                                || value10==131 || value10==133 ||  value10==137 || value10==138 || value10==140 || value10==141
                                || value10==144 || value10==147 || value10==156 || value10==157 || value10==169 || value10==171 || value10==178 || value10==179 || value10==180 || value10==181 || value10==182 || value10==183
                                || value10==185 || value10==189 || value10==192 || value10==196 || value10==199 || value10==201 || value10==204 || value10==205
                                || value10==207 || value10==210 || value10==218 || value10==225 || value10==231 || value10==234 || value10==235 || value10==237 || value10==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value10==21 || value10==57 || value10==106 || value10==107 || value10==119 || value10==187 || value10==217 )
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
                            
                            if(value10==1 || value10==2 || value10==3 || value10==4 || value10==6 || value10==8 || value10==10 || value10==13 || value10==16 || value10==17 || value10==19 || value10==20 || value10==24
                                || value10==27 || value10==28 || value10==29 || value10==30 || value10==31 || value10==32 || value10==33 || value10==36 || value10==37 || value10==39 || value10==41 || value10==42 || value10==43
                                || value10==46 || value10==47 || value10==48 || value10==49 || value10==50 || value10==51 || value10==52 || value10==53 || value10==55 || value10==58 || value10==62 || value10==64 || value10==65 || value10==66 
                                || value10==67 || value10==68 || value10==69 || value10==70 || value10==71 || value10==72 || value10==73 || value10==74 || value10==82 || value10==85 || value10==86 || value10==90 || value10==91 || value10==92 || value10==93
                                || value10==94 || value10==95 || value10==96 || value10==97 || value10==98 || value10==99 || value10==100 || value10==102 || value10==103
                                
                                || value10==109  || value10==112  || value10==115  || value10==116  || value10==117  || value10==121  || value10==123  || value10==124
                                || value10==126  || value10==127  || value10==128  || value10==129  || value10==134  || value10==135  || value10==136
                                || value10==139  || value10==143  || value10==145  || value10==146  || value10==148  || value10==150 || value10==151
                                || value10==152 || value10==153 || value10==154 || value10==155 || value10==158 || value10==160 || value10==162 
                                || value10==163 || value10==164 || value10==165 || value10==166 || value10==168 || value10==170 || value10==172 || value10==173 || value10==174 || value10==175 || value10==176 || value10==177
                                || value10==186 || value10==187 || value10==188 || value10==190 || value10==191 || value10==193 || value10==195
                                || value10==197 || value10==198 || value10==200 || value10==202 || value10==203 || value10==206 || value10==208 || value10==209
                                || value10==211 || value10==212 || value10==213 || value10==214 || value10==219 || value10==220 || value10==221 || value10==222 || value10==223 || value10==224
                                || value10==226 || value10==230 || value10==232 || value10==233 || value10==236 || value10==237 || value10==238 || value10==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value10==5 || value10==7 || value10==9 || value10==12 || value10==25 || value10==34 || value10==35 || value10==61 || value10==76 || value10==84|| value10==88
                                
                                || value10==114 || value10==130 || value10==132 || value10==142 || value10==149 || value10==159 || value10==161 
                                || value10==167 || value10==194 || value10==215 || value10==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value10==11 || value10==14 || value10==15 || value10==18 || value10==22 || value10==23 || value10==26 || value10==30 || value10==38 || value10==40
                                || value10==44 || value10==45 || value10==54 || value10==56 || value10==59 || value10==60 || value10==63 || value10==70 || value10==75 || value10==77 
                                || value10==78 || value10==79 || value10==80 || value10==81 || value10==83 || value10==87 || value10==89 || value10==96 || value10==97 || value10==98 
                                || value10==99 || value10==100 || value10==101 || value10==102 || value10==104 || value10==105
                                
                                || value10==108 || value10==110 || value10==111 || value10==113 || value10==118 || value10==120 || value10==125
                                || value10==131 || value10==133 ||  value10==137 || value10==138 || value10==140 || value10==141
                                || value10==144 || value10==147 || value10==156 || value10==157 || value10==169 || value10==171 || value10==178 || value10==179 || value10==180 || value10==181 || value10==182 || value10==183
                                || value10==185 || value10==189 || value10==192 || value10==196 || value10==199 || value10==201 || value10==204 || value10==205
                                || value10==207 || value10==210 || value10==218 || value10==225 || value10==231 || value10==234 || value10==235 || value10==237 || value10==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value10==21 || value10==57 || value10==106 || value10==107 || value10==119 || value10==187 || value10==217)
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
                            <select className="text-start form-select" name='RF_Type_Legal_Entity' id='RF_Type_Legal_Entity' value={value17} onChange={handleChange17}  aria-label="Default select example">
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
                            
                        if(value17==1 || value17==4 || value17==6 || value17==8 || value17==13 || value17==15 || value17==16
                            || value17==20 || value17==21 || value17==25)
                        {
                            return (<>
                                        
                                <label className="col-form-label">1</label>
                                        
                            </>);
                        }

                        else if(value17==2 || value17==3 || value17==7 || value17==9 || value17==10 || value17==11 || value17==12
                            || value17==17 || value17==18 || value17==22 || value17==23)
                        {
                            return (<>
                                        
                                <label className="col-form-label">3</label>
                                        
                            </>);
                        }

                        else if(value17==5 || value17==14 || value17==19 || value17==24)
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
                            
                            if(value17==1 || value17==4 || value17==6 || value17==8 || value17==13 || value17==15 || value17==16
                                || value17==20 || value17==21 || value17==25)
                            {
                                return (<>
                                            
                                    <label className="col-form-label">1</label>
                                            
                                </>);
                            }
    
                            else if(value17==2 || value17==3 || value17==7 || value17==9 || value17==10 || value17==11 || value17==12
                                || value17==17 || value17==18 || value17==22 || value17==23)
                            {
                                return (<>
                                            
                                    <label className="col-form-label">3</label>
                                            
                                </>);
                            }
    
                            else if(value17==5 || value17==14 || value17==19 || value17==24)
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
                            <select className="text-start form-select" name='RF_Industry' id='RF_Industry' value={value14} onChange={handleChange14}  aria-label="Default select example">
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
                            
                            if(value14==1 || value14==3 || value14==15 || value14==19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value14==2 || value14==12 || value14==14 || value14==16 || value14==17 || value14==20 || value14==23 || value14==24
                                || value14==26 || value14==27 || value14==28 || value14==30 || value14==34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value14==4 || value14==5 || value14==6 || value14==7 || value14==8 || value14==9 || value14==10 || value14==11 || value14==13
                                || value14==18 || value14==21 || value14==22 || value14==29 || value14==32 || value14==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value14==25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            else if(value14==31)
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
                            
                            if(value14==1 || value14==3 || value14==15 || value14==19)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value14==25)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            }

                            
                            else if(value14==2 || value14==12 || value14==14 || value14==16 || value14==17 || value14==20 || value14==23 || value14==24
                                || value14==26 || value14==27 || value14==28 || value14==30 || value14==34)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value14==4 || value14==5 || value14==6 || value14==7 || value14==8 || value14==9 || value14==10 || value14==11 || value14==13
                                || value14==18 || value14==21 || value14==22 || value14==29 || value14==32 || value14==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value14==31)
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
                            <select className="text-start form-select" name='RF_SourceOfFunds' id='RF_SourceOfFunds' value={value15} onChange={handleChange15}  aria-label="Default select example">
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
                            
                            if(value15==1 || value15==6 || value15==12 || value15==13 || value15==16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value15==2 || value15==3 || value15==8 || value15==9 || value15==14 || value15==17 || value15==18 || value15==20
                                || value15==22 || value15==23 || value15==25 || value15==26 || value15==29 || value15==31 || value15==32 || value15==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value15==4 || value15==5 || value15==7 || value15==10 || value15==11 || value15==15 || value15==19 || value15==24
                                || value15==27 || value15==28 || value15==30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value15==21)
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
                            
                            if(value15==1 || value15==6 || value15==12 || value15==13 || value15==16)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value15==2 || value15==3 || value15==8 || value15==9 || value15==14 || value15==17 || value15==18 || value15==20
                               || value15==22 || value15==23 || value15==25 || value15==26 || value15==29 || value15==31 || value15==32 || value15==33)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value15==4 || value15==5 || value15==7 || value15==10 || value15==11 || value15==15 || value15==19 || value15==24
                                || value15==27 || value15==28 || value15==30)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value15==21)
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
                            <select className="text-start form-select" name='RF_Client_Relationship' id='RF_Client_Relationship' value={value16} onChange={handleChange16}  aria-label="Default select example">
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
                            
                            if(value16==1 || value16==2 || value16==4 || value16==6 || value16==7 || value16==9 || value16==11
                                || value16==13 || value16==15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value16==3 || value16==5 || value16==8 || value16==10 || value16==12 || value16==14 || value16==16)
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
                            
                            if(value16==1 || value16==2 || value16==4 || value16==6 || value16==7 || value16==9 || value16==11 
                            || value16==13 || value16==15)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value16==3 || value16==5 || value16==8 || value16==10 || value16==12 || value16==14 || value16==16)
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
                    <label className="col-form-label"></label>
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
                    <label className="col-form-label">0</label>
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
                    <select className="text-start form-select" name='RF_Product_Name' id='RF_Product_Name' value={value37} onChange={handleChange37} aria-label="Default select example">
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
                        
                        if(value37==1 || value37==2 || value37==6 || value37==9 || value37==12 || value37==13 || value37==16
                            || value37==19 || value37==20 || value37==24 || value37==26 || value37==27)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        else if(value37==3 || value37==4 || value37==5 || value37==8 || value37==11 || value37==18 || value37==21)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        else if(value37==7 || value37==10 || value37==14 || value37==15 || value37==17 || value37==22 || value37==23
                            || value37==25 || value37==28 || value37==29)
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
                        
                        if(value37==1 || value37==2 || value37==6 || value37==9 || value37==12 || value37==13 || value37==16
                            || value37==19 || value37==20 || value37==24 || value37==26 || value37==27)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        else if(value37==3 || value37==4 || value37==5 || value37==8 || value37==11 || value37==18 || value37==21)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        else if(value37==7 || value37==10 || value37==14 || value37==15 || value37==17 || value37==22 || value37==23
                            || value37==25 || value37==28 || value37==29)
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
                    <input spellCheck="true" id="RF_Product_Category" name='EB_ClientPhoneNumber' className="form-control" placeholder=""  aria-describedby="" />
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
                        
                        if(value5==3)
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
                    <label className="col-form-label">0</label>
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
                    <select className="text-start form-select" name='RF_Transaction_Flow' id='RF_Transaction_Flow'  value={value5} onChange={handleChange5} aria-label="Default select example">
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
                                
                    if(value5==1 || value5==2)
                    {
                        
                        return (<>
                        <br/>
                        
                        <div className="col-2">       
                            <label className="col-form-label">Method of Transaction</label>
                        </div>

                        <div className="col-2">
                            <select className="text-start form-select" name='RF_Transaction_Method' id='RF_Transaction_Method' value={value18} onChange={handleChange18}  aria-label="Default select example">
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
                            
                            if(value18==3 || value18==6 || value18==9 || value18==10 || value18==12)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(value18==1 || value18==4 || value18==5 || value18==7 || value18==8)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value18==2 || value18==11)
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
                            
                            if(value18==1 || value18==4 || value18==5 || value18==7 || value18==8)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">4</label>
                                    
                                </>);
                            }

                            else if(value18==2 || value18==11)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value18==3 || value18==6 || value18==9 || value18==10 || value18==12)
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
                            <select className="text-start form-select" name='RF_Transaction_Reason' id='RF_Transaction_Reason' value={value19} onChange={handleChange19}  aria-label="Default select example">
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
                            
                            if(value19==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value19!=0)
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
                            
                            if(value19==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value19!=0)
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
                            <select className="text-start form-select" name='RF_High_Transaction_Reason' id='RF_High_Transaction_Reason' value={value20} onChange={handleChange20}  aria-label="Default select example">
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
                            
                            if(value20==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(value20==2)
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
                            
                            if(value20==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            } 

                            else if(value20==2)
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
                            <select className="text-start form-select" name='RF_Transaction_Frequency' id='RF_Transaction_Frequency' value={value21} onChange={handleChange21}  aria-label="Default select example">
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
                            
                            if(value21==1 || value21==2 || value21==3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            if(value21==4)
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
                            
                            if(value21==1 || value21==2 || value21==3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            if(value21==4)
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
                            <input spellCheck="true" id="RF_Transaction_Value" name='RF_Transaction_Value' className="form-control" aria-describedby="" />
                        </div>

                        <div className="col-1">       
                            <label className="col-form-label">Currency:</label>
                        </div>

                        <div className="col-2">
                            <input spellCheck="true" id="RF_Currency_Value" name='RF_Currency_Value' className="form-control" aria-describedby="" />
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
                            <select className="text-start form-select" name='RF_Transaction_Geography' id='RF_Transaction_Geography' value={value22} onChange={handleChange22}  aria-label="Default select example">
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
                            
                            if(value22==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value22==2 || value22==3)
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
                            
                            if(value22==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value22==2 || value22==3)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 
                                                 
                            })()}
                        </div> 

                        <hr/>
                        
                            {(() => { 
                            
                            if(value22==1)
                            {
                                return (<>
                                     <div className="col-2">
                                        <label className="col-form-label">Jurisdiction of funds</label>
                                    </div>

                                <div className="col-2">
                                    <select className="text-start form-select" name='RF_Funds_Jurisdiction' value={value23} onChange={handleChange23}  aria-label="Default select example">
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
                            
                            if(value23==1 || value23==2 || value23==3 || value23==4 || value23==6 || value23==8 || value23==10 || value23==13 || value23==16 || value23==17 || value23==19 || value23==20 || value23==24 || value23==27
                                || value23==28 || value23==29 || value23==31 || value23==32 || value23==33 || value23==36 || value23==37 || value23==39 || value23==41 || value23==42 || value23==43 || value23==46 || value23==47 || value23==48 || value23==49 || value23==50 || value23==51 || value23==52 || value23==53
                                || value23==55 || value23==58 || value23==62 || value23==64 || value23==65 || value23==66 || value23==67 || value23==68 || value23==69 || value23==71 || value23==72 || value23==73 || value23==74
                                || value23==82 || value23==85 || value23==86 || value23==90 || value23==91 || value23==92 || value23==93
                                || value23==94 || value23==95 || value23==97 || value23==98 || value23==99 || value23==100 || value23==103 
                                
                                || value23==109  || value23==112  || value23==115 || value23==116  || value23==117  || value23==121  || value23==123  || value23==124
                                || value23==126  || value23==127  || value23==128 || value23==129  || value23==134  || value23==135  || value23==136
                                || value23==139  || value23==143  || value23==145 || value23==146  || value23==148  || value23==150 || value23==151
                                || value23==152 || value23==153 || value23==154 || value23==155 || value23==158 || value23==160 || value23==162 
                                || value23==163 || value23==164 || value23==165 || value23==166 || value23==168 || value23==170 || value23==172 || value23==173 || value23==174 || value23==175 || value23==176 || value23==177
                                || value23==186 || value23==187 || value23==188 || value23==190 || value23==191 || value23==193 || value23==195
                                || value23==197 || value23==198 || value23==200 || value23==202 || value23==203 || value23==206 || value23==208 || value23==209
                                || value23==211 || value23==212 || value23==213 || value23==214 || value23==219 || value23==220 || value23==221 || value23==222 || value23==223 || value23==224
                                || value23==226 || value23==230 || value23==232 || value23==233 || value23==236 || value23==237 || value23==238 || value23==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value23==5 || value23==7 || value23==9 || value23==12 || value23==25 || value23==34 || value23==35 || value23==61 || value23==76 || value23==84 || value23==88
                                
                                || value23==114 || value23==130 || value23==132 || value23==142 || value23==149 || value23==159 || value23==161 
                                || value23==167 || value23==194 || value23==215 || value23==216 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            }

                            else if(value23==11 || value23==14 || value23==15 || value23==18 || value23==22 || value23==23 || value23==26 || value23==30 || value23==38 || value23==40 || value23==44 || value23==45
                                || value23==54 || value23==56 || value23==59 || value23==60 || value23==63 || value23==70 || value23==75 || value23==77 || value23==78 || value23==79 || value23==80 || value23==81
                                || value23==83 || value23==87 || value23==89 || value23==96 || value23==101 || value23==104 || value23==105
                                
                                || value23==108 || value23==110 || value23==111 || value23==113 || value23==118 || value23==120 || value23==125
                                || value23==131 || value23==133 || value23==137 || value23==138 || value23==140 || value23==141
                                || value23==144 || value23==147 || value23==156 || value23==157 || value23==169 || value23==171 || value23==178 || value23==179 || value23==180 || value23==181 || value23==182 || value23==183
                                || value23==185 || value23==189 || value23==192 || value23==196 || value23==199 || value23==201 || value23==204 || value23==205
                                || value23==207 || value23==210 || value23==218 || value23==225 || value23==231 || value23==234 || value23==235 || value23==237 || value23==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            }

                            else if(value23==21 || value23==57 || value23==106 || value23==107 || value23==119 || value23==187 || value23==217 )
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
                            
                            if(value23==1 || value23==2 || value23==3 || value23==4 || value23==6 || value23==8 || value23==10 || value23==13 || value23==16 || value23==17 || value23==19 || value23==20 || value23==24
                                || value23==27 || value23==28 || value23==29 || value23==30 || value23==31 || value23==32 || value23==33 || value23==36 || value23==37 || value23==39 || value23==41 || value23==42 || value23==43
                                || value23==46 || value23==47 || value23==48 || value23==49 || value23==50 || value23==51 || value23==52 || value23==53 || value23==55 || value23==58 || value23==62 || value23==64 || value23==65 || value23==66 
                                || value23==67 || value23==68 || value23==69 || value23==70 || value23==71 || value23==72 || value23==73 || value23==74 || value23==82 || value23==85 || value23==86 || value23==90 || value23==91 || value23==92 || value23==93
                                || value23==94 || value23==95 || value23==96 || value23==97 || value23==98 || value23==99 || value23==100 || value23==102 || value23==103
                                
                                || value23==109  || value23==112  || value23==115  || value23==116  || value23==117  || value23==121  || value23==123 || value23==124
                                || value23==126  || value23==127  || value23==128  || value23==129  || value23==134  || value23==135  || value23==136
                                || value23==139  || value23==143  || value23==145  || value23==146  || value23==148  || value23==150 || value23==151
                                || value23==152 || value23==153 || value23==154 || value23==155 || value23==158 || value23==160 || value23==162 
                                || value23==163 || value23==164 || value23==165 || value23==166 || value23==168 || value23==170 || value23==172 || value23==173 || value23==174 || value23==175 || value23==176 || value23==177
                                || value23==186 || value23==187 || value23==188 || value23==190 || value23==191 || value23==193 || value23==195
                                || value23==197 || value23==198 || value23==200 || value23==202 || value23==203 || value23==206 || value23==208 || value23==209
                                || value23==211 || value23==212 || value23==213 || value23==214 || value23==219 || value23==220 || value23==221 || value23==222 || value23==223 || value23==224
                                || value23==226 || value23==230 || value23==232 || value23==233 || value23==236 || value23==237 || value23==238 || value23==239)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">9</label>
                                    
                                </>);
                            }

                            else if(value23==5 || value23==7 || value23==9 || value23==12 || value23==25 || value23==34 || value23==35 || value23==61 || value23==76 || value23==84|| value23==88
                                
                                || value23==114 || value23==130 || value23==132 || value23==142 || value23==149 || value23==159 || value23==161 
                                || value23==167 || value23==194 || value23==215 || value23==216)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            }

                            else if(value23==11 || value23==14 || value23==15 || value23==18 || value23==22 || value23==23 || value23==26 || value23==30 || value23==38 || value23==40
                                || value23==44 || value23==45 || value23==54 || value23==56 || value23==59 || value23==60 || value23==63 || value23==70 || value23==75 || value23==77 
                                || value23==78 || value23==79 || value23==80 || value23==81 || value23==83 || value23==87 || value23==89 || value23==96 || value23==97 || value23==98 
                                || value23==99 || value23==100 || value23==101 || value23==102 || value23==104 || value23==105
                                
                                || value23==108 || value23==110 || value23==111 || value23==113 || value23==118 || value23==120 || value23==125
                                || value23==131 || value23==133 || value23==137 || value23==138 || value23==140 || value23==141
                                || value23==144 || value23==147 || value23==156 || value23==157 || value23==169 || value23==171 || value23==178 || value23==179 || value23==180 || value23==181 || value23==182 || value23==183
                                || value23==185 || value23==189 || value23==192 || value23==196 || value23==199 || value23==201 || value23==204 || value23==205
                                || value23==207 || value23==210 || value23==218 || value23==225 || value23==231 || value23==234 || value23==235 || value23==237 || value23==238)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">6</label>
                                    
                                </>);
                            }

                            else if(value23==21 || value23==57 || value23==106 || value23==107 || value23==119 || value23==187 || value23==217)
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
                            <select className="text-start form-select" name='RF_Delivery_Channel' id='RF_Delivery_Channel' value={value24} onChange={handleChange24}  aria-label="Default select example">
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
                            
                            if(value24==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(value24==2 || value24==5 || value24==6)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value24==3 || value24==4)
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
                            
                            if(value24==1)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">3</label>
                                    
                                </>);
                            } 

                            else if(value24==2 || value24==5 || value24==6)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">2</label>
                                    
                                </>);
                            } 

                            else if(value24==3 || value24==4)
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
                            <select className="text-start form-select" name='RF_Linked_Party_Acting' id='RF_Linked_Party_Acting' value={value25} onChange={handleChange25}  aria-label="Default select example">
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
                            
                            if(value25==1 || value25==2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(value25==3)
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
                            
                            if(value25==1 || value25==2)
                            {
                                return (<>
                                     
                                    <label className="col-form-label">1</label>
                                    
                                </>);
                            } 

                            else if(value25==3)
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
                            <select className="text-start form-select" name='RF_Linked_Party_Paying' id='RF_Linked_Party_Paying' value={value26} onChange={handleChange26}  aria-label="Default select example">
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
                            
                            if(value26==1 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            } 

                            else if(value26==2 || value26==3)
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
                            
                            if(value26==1 )
                            {
                                return (<>
                                     
                                    <label className="col-form-label">0</label>
                                    
                                </>);
                            } 

                            else if(value26==2 || value26==3)
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
                        
                        if(value6==1)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Medium</label>
                                
                            </>);
                        }

                        if(value6==2)
                        {
                            return (<>
                                
                                 <label className="col-form-label">High</label>
                                
                            </>);
                        }

                        if(value6==3 || value6==6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Low</label>
                                
                            </>);
                        }

                        if(value6==4 || value6==7)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label">Medium</label>
                                </div>

                            </>);
                        }

                        if(value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                <div className="col-2">
                                    <label className="col-form-label">High</label>
                                </div>

                            </>);
                        }

                        if(value6==9 || value6==10)
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
                        
                        if(value6==1 || value6==4 || value6==7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        
                        if(value6==2 || value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        
                        if(value6==3 || value6==6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(value6==9 || value6==10)
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
                    <select className="text-start form-select" name='RF_Client_Match' id='RF_Client_Match'  value={value6} onChange={handleChange6} aria-label="Default select example">
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
                        
                        if(value6==1 || value6==4 || value6==7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        if(value6==2 || value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        
                        if(value6==3 || value6==6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(value6==9 || value6==10)
                        {
                            return (<>
                                
                                 <label className="col-form-label">4</label>
                                
                            </>);
                        }
                    })()}
                </div>

                <div className="col-1">
                {(() => { 
                        
                        if(value6==1 || value6==2 || value6==3 || value6==4 || value6==5|| value6==6 || value6==7 || value6==8 || value6==9 || value6==10 || value6==11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }
                    })()}
                </div>

                <div className="col-2">
                {(() => { 
                        
                        if(value6==1 || value6==4 || value6==7)
                        {
                            return (<>
                                
                                 <label className="col-form-label">2</label>
                                
                            </>);
                        }

                        
                        if(value6==2 || value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                
                                 <label className="col-form-label">3</label>
                                
                            </>);
                        }

                        if(value6==3 || value6==6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">1</label>
                                
                            </>);
                        }

                        if(value6==9 || value6==10)
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
                    <select className="text-start form-select" name='RF_Client_Beneficiaries' id='RF_Client_Beneficiaries' value={value27} onChange={handleChange27} aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>  
                </div>

                {(() => { 
                        
                        if(value27==1)
                        {
                            return (<>
                                <hr/>
                                <div className="col-2">
                                    <label className="col-form-label"><b>&nbsp;&nbsp;&nbsp;Linked Party 1</b></label>
                                 </div>

                                 <div className="col-2">
                                 {(() => { 
                        
                                if(value28==1)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>Low</b></label>
                                    </div>
                                    </>)
                                 }

                                else if(value28==2)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>Medium</b></label>
                                    </div>
                                    </>)
                                 }

                                 if(value28==3)
                                {
                                    return (<>
                                    
                                    <div className="col-2">
                                        <label className="col-form-label"><b>High</b></label>
                                    </div>
                                    </>)
                                 }

                                 if(value28==4)
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
                                    <select className="text-start form-select" name='RF_Adjust_Risk1' id='RF_Adjust_Risk1' value={value28} onChange={handleChange28} aria-label="Default select example">
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
                                 <input spellCheck="true" id="RF_Name" name='RF_Name' className="form-control" value={FormData['RF_Name']}  onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                                 </div>

                                 <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relationship to client</label>
                                 </div>

                                 <div className="col-2">
                                    <select className="text-start form-select" name='RF_Client_Relationship' id='RF_Client_Relationship' value={FormData['RF_Client_Relationship']} onChange={(e) => {onChange(e)}} aria-label="Default select example">
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
                                    <input spellCheck="true" id="RF_ID" name='RF_ID' className="form-control" value={FormData['RF_ID']} onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                                 </div>
                                 
                                 <hr/>
                                 <div className="col-2">
                                    <label className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linked Party is a true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; match on</label>
                                 </div>

                                 <div className="col-2">
                                    <select className="text-start form-select" name='RF_Linked_Party' id='RF_Linked_Party' value={value29} onChange={handleChange29} aria-label="Default select example">
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
                                        
                                        if(value29==1 || value29==4 || value29==7)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        if(value29==2 || value29==5 || value29==8 || value29==11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">3</label>
                                                
                                            </>);
                                        }

                                        
                                        if(value29==3 || value29==6)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }

                                        if(value29==9 || value29==10)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">4</label>
                                                
                                            </>);
                                        }
                                    })()}
                                </div>

                                <div className="col-1">
                                {(() => { 
                                        
                                        if(value29==1 || value29==2 || value29==3 || value29==4 || value29==5|| value29==6 || value29==7 || value29==8 || value29==9 || value29==10 || value29==11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }
                                    })()}
                                </div>

                                <div className="col-2">
                                {(() => { 
                                        
                                        if(value29==1 || value29==4 || value29==7)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        
                                        if(value29==2 || value29==5 || value29==8 || value29==11)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">3</label>
                                                
                                            </>);
                                        }

                                        if(value29==3 || value29==6)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">1</label>
                                                
                                            </>);
                                        }

                                        if(value29==9 || value29==10)
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
                                    <select className="text-start form-select" name='RF_RCA' id='RF_RCA' value={value30} onChange={handleChange30} aria-label="Default select example">
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
                                        
                                        if(value30==1)
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
                                        
                                        if(value30==1)
                                        {
                                            return (<>
                                                
                                                <label className="col-form-label">2</label>
                                                
                                            </>);
                                        }

                                        else if(value30==2)
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
                                    <select className="text-start form-select" name='RF_Birth_Country' id='RF_Birth_Country' value={value31} onChange={handleChange31}  aria-label="Default select example">
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
                                    
                                    if(value31==1 || value31==2 || value31==3 || value31==4 || value31==6 || value31==8 || value31==10 || value31==13 || value31==16 || value31==17 || value31==19 || value31==20 || value31==24 || value31==27
                                        || value31==28 || value31==29 || value31==31 || value31==32 || value31==33 || value31==36 || value31==37 || value31==39 || value31==41 || value31==42 || value31==43 || value31==46 || value31==47 || value31==48 || value31==49 || value31==50 || value31==51 || value31==52 || value31==53
                                        || value31==55 || value31==58 || value31==62 || value31==64 || value31==65 || value31==66 || value31==67 || value31==68 || value31==69 || value31==71 || value31==72 || value31==73 || value31==74
                                        || value31==82 || value31==85 || value31==86 || value31==90 || value31==91 || value31==92 || value31==93
                                        || value31==94 || value31==95 || value31==97 || value31==98 || value31==99 || value31==100 || value31==103 
                                        
                                        || value31==109 || value31==112  || value31==115 || value31==116  || value31==117  || value31==121  || value31==123  || value31==124
                                        || value31==126 || value31==127  || value31==128 || value31==129  || value31==134  || value31==135  || value31==136
                                        || value31==139 || value31==143  || value31==145 || value31==146  || value31==148  || value31==150 || value31==151
                                        || value31==152 || value31==153 || value31==154 || value31==155 || value31==158 || value31==160 || value31==162 
                                        || value31==163 || value31==164 || value31==165 || value31==166 || value31==168 || value31==170 || value31==172 || value31==173 || value31==174 || value31==175 || value31==176 || value31==177
                                        || value31==186 || value31==187 || value31==188 || value31==190 || value31==191 || value31==193 || value31==195
                                        || value31==197 || value31==198 || value31==200 || value31==202 || value31==203 || value31==206 || value31==208 || value31==209
                                        || value31==211 || value31==212 || value31==213 || value31==214 || value31==219 || value31==220 || value31==221 || value31==222 || value31==223 || value31==224
                                        || value31==226 || value31==230 || value31==232 || value31==233 || value31==236 || value31==237 || value31==238 || value31==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value31==5 || value31==7 || value31==9 || value31==12 || value31==25 || value31==34 || value31==35 || value31==61 || value31==76 || value31==84 || value31==88
                                        
                                        || value31==114 || value31==130 || value31==132 || value31==142 || value31==149 || value31==159 || value31==161 
                                        || value31==167 || value31==194 || value31==215 || value31==216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(value31==11 || value31==14 || value31==15 || value31==18 || value31==22 || value31==23 || value31==26 || value31==30 || value31==38 || value31==40 || value31==44 || value31==45
                                        || value31==54 || value31==56 || value31==59 || value31==60 || value31==63 || value31==70 || value31==75 || value31==77 || value31==78 || value31==79 || value31==80 || value31==81
                                        || value31==83 || value31==87 || value31==89 || value31==96 || value31==101 || value31==104 || value31==105
                                        
                                        || value31==108 || value31==110 || value31==111 || value31==113 || value31==118 || value31==120 || value31==125
                                        || value31==131 || value31==133 || value31==137 || value31==138 || value31==140 || value31==141
                                        || value31==144 || value31==147 || value31==156 || value31==157 || value31==169 || value31==171 || value31==178 || value31==179 || value31==180 || value31==181 || value31==182 || value31==183
                                        || value31==185 || value31==189 || value31==192 || value31==196 || value31==199 || value31==201 || value31==204 || value31==205
                                        || value31==207 || value31==210 || value31==218 || value31==225 || value31==231 || value31==234 || value31==235 || value31==237 || value31==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(value31==21 || value31==57 || value31==106 || value31==107 || value31==119 || value31==187 || value31==217 )
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
                                    
                                    if(value31==1 || value31==2 || value31==3 || value31==4 || value31==6 || value31==8 || value31==10 || value31==13 || value31==16 || value31==17 || value31==19 || value31==20 || value31==24
                                        || value31==27 || value31==28 || value31==29 || value31==30 || value31==31 || value31==32 || value31==33 || value31==36 || value31==37 || value31==39 || value31==41 || value31==42 || value31==43
                                        || value31==46 || value31==47 || value31==48 || value31==49 || value31==50 || value31==51 || value31==52 || value31==53 || value31==55 || value31==58 || value31==62 || value31==64 || value31==65 || value31==66 
                                        || value31==67 || value31==68 || value31==69 || value31==70 || value31==71 || value31==72 || value31==73 || value31==74 || value31==82 || value31==85 || value31==86 || value31==90 || value31==91 || value31==92 || value31==93
                                        || value31==94 || value31==95 || value31==96 || value31==97 || value31==98 || value31==99 || value31==100 || value31==102 || value31==103
                                        
                                        || value31==109 || value31==112 || value31==115 || value31==116 || value31==117 || value31==121 || value31==123 || value31==124
                                        || value31==126 || value31==127 || value31==128 || value31==129 || value31==134 || value31==135 || value31==136
                                        || value31==139 || value31==143 || value31==145 || value31==146 || value31==148 || value31==150 || value31==151
                                        || value31==152 || value31==153 || value31==154 || value31==155 || value31==158 || value31==160 || value31==162 
                                        || value31==163 || value31==164 || value31==165 || value31==166 || value31==168 || value31==170 || value31==172 || value31==173 || value31==174 || value31==175 || value31==176 || value31==177
                                        || value31==186 || value31==187 || value31==188 || value31==190 || value31==191 || value31==193 || value31==195
                                        || value31==197 || value31==198 || value31==200 || value31==202 || value31==203 || value31==206 || value31==208 || value31==209
                                        || value31==211 || value31==212 || value31==213 || value31==214 || value31==219 || value31==220 || value31==221 || value31==222 || value31==223 || value31==224
                                        || value31==226 || value31==230 || value31==232 || value31==233 || value31==236 || value31==237 || value31==238 || value31==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(value31==5 || value31==7 || value31==9 || value31==12 || value31==25 || value31==34 || value31==35 || value31==61 || value31==76 || value31==84|| value31==88
                                        
                                        || value31==114 || value31==130 || value31==132 || value31==142 || value31==149 || value31==159 || value31==161 
                                        || value31==167 || value31==194 || value31==215 || value31==216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value31==11 || value31==14 || value31==15 || value31==18 || value31==22 || value31==23 || value31==26 || value31==30 || value31==38 || value31==40
                                        || value31==44 || value31==45 || value31==54 || value31==56 || value31==59 || value31==60 || value31==63 || value31==70 || value31==75 || value31==77 
                                        || value31==78 || value31==79 || value31==80 || value31==81 || value31==83 || value31==87 || value31==89 || value31==96 || value31==97 || value31==98 
                                        || value31==99 || value31==100 || value31==101 || value31==102 || value31==104 || value31==105
                                        
                                        || value31==108 || value31==110 || value31==111 || value31==113 || value31==118 || value31==120 || value31==125
                                        || value31==131 || value31==133 || value31==137 || value31==138 || value31==140 || value31==141
                                        || value31==144 || value31==147 || value31==156 || value31==157 || value31==169 || value31==171 || value31==178 || value31==179 || value31==180 || value31==181 || value31==182 || value31==183
                                        || value31==185 || value31==189 || value31==192 || value31==196 || value31==199 || value31==201 || value31==204 || value31==205
                                        || value31==207 || value31==210 || value31==218 || value31==225 || value31==231 || value31==234 || value31==235 || value31==237 || value31==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(value31==21 || value31==57 || value31==106 || value31==107 || value31==119 || value31==187 || value31==217)
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
                                    <select className="text-start form-select" name='RF_Residence_Country' id='RF_Residence_Country' value={value32} onChange={handleChange32}  aria-label="Default select example">
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
                                    
                                    if(value32==1 || value32==2 || value32==3 || value32==4 || value32==6 || value32==8 || value32==10 || value32==13 || value32==16 || value32==17 || value32==19 || value32==20 || value32==24 || value32==27
                                        || value32==28 || value32==29 || value32==31 || value32==32 || value32==33 || value32==36 || value32==37 || value32==39 || value32==41 || value32==42 || value32==43 || value32==46 || value32==47 || value32==48 || value32==49 || value32==50 || value32==51 || value32==52 || value32==53
                                        || value32==55 || value32==58 || value32==62 || value32==64 || value32==65 || value32==66 || value32==67 || value32==68 || value32==69 || value32==71 || value32==72 || value32==73 || value32==74
                                        || value32==82 || value32==85 || value32==86 || value32==90 || value32==91 || value32==92 || value32==93
                                        || value32==94 || value32==95 || value32==97 || value32==98 || value32==99 || value32==100 || value32==103 
                                        
                                        || value32==109 || value32==112  || value32==115 || value32==116 || value32==117 || value32==121 || value32==123  || value32==124
                                        || value32==126 || value32==127  || value32==128 || value32==129 || value32==134 || value32==135 || value32==136
                                        || value32==139 || value32==143  || value32==145 || value32==146 || value32==148 || value32==150 || value32==151
                                        || value32==152 || value32==153 || value32==154 || value32==155 || value32==158 || value32==160 || value32==162 
                                        || value32==163 || value32==164 || value32==165 || value32==166 || value32==168 || value32==170 || value32==172 || value32==173 || value32==174 || value32==175 || value32==176 || value32==177
                                        || value32==186 || value32==187 || value32==188 || value32==190 || value32==191 || value32==193 || value32==195
                                        || value32==197 || value32==198 || value32==200 || value32==202 || value32==203 || value32==206 || value32==208 || value32==209
                                        || value32==211 || value32==212 || value32==213 || value32==214 || value32==219 || value32==220 || value32==221 || value32==222 || value32==223 || value32==224
                                        || value32==226 || value32==230 || value32==232 || value32==233 || value32==236 || value32==237 || value32==238 || value32==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value32==5 || value32==7 || value32==9 || value32==12 || value32==25 || value32==34 || value32==35 || value32==61 || value32==76 || value32==84 || value32==88
                                        
                                        || value32==114 || value32==130 || value32==132 || value32==142 || value32==149 || value32==159 || value32==161 
                                        || value32==167 || value32==194 || value32==215 || value32==216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(value32==11 || value32==14 || value32==15 || value32==18 || value32==22 || value32==23 || value32==26 || value32==30 || value32==38 || value32==40 || value32==44 || value32==45
                                        || value32==54 || value32==56 || value32==59 || value32==60 || value32==63 || value32==70 || value32==75 || value32==77 || value32==78 || value32==79 || value32==80 || value32==81
                                        || value32==83 || value32==87 || value32==89 || value32==96 || value32==101 || value32==104 || value32==105
                                        
                                        || value32==108 || value32==110 || value32==111 || value32==113 || value32==118 || value32==120 || value32==125
                                        || value32==131 || value32==133 || value32==137 || value32==138 || value32==140 || value32==141
                                        || value32==144 || value32==147 || value32==156 || value32==157 || value32==169 || value32==171 || value32==178 || value32==179 || value32==180 || value32==181 || value32==182 || value32==183
                                        || value32==185 || value32==189 || value32==192 || value32==196 || value32==199 || value32==201 || value32==204 || value32==205
                                        || value32==207 || value32==210 || value32==218 || value32==225 || value32==231 || value32==234 || value32==235 || value32==237 || value32==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(value32==21 || value32==57 || value32==106 || value32==107 || value32==119 || value32==187 || value32==217 )
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
                                    
                                    if(value32==1 || value32==2 || value32==3 || value32==4 || value32==6 || value32==8 || value32==10 || value32==13 || value32==16 || value32==17 || value32==19 || value32==20 || value32==24
                                        || value32==27 || value32==28 || value32==29 || value32==30 || value32==31 || value32==32 || value32==33 || value32==36 || value32==37 || value32==39 || value32==41 || value32==42 || value32==43
                                        || value32==46 || value32==47 || value32==48 || value32==49 || value32==50 || value32==51 || value32==52 || value32==53 || value32==55 || value32==58 || value32==62 || value32==64 || value32==65 || value32==66 
                                        || value32==67 || value32==68 || value32==69 || value32==70 || value32==71 || value32==72 || value32==73 || value32==74 || value32==82 || value32==85 || value32==86 || value32==90 || value32==91 || value32==92 || value32==93
                                        || value32==94 || value32==95 || value32==96 || value32==97 || value32==98 || value32==99 || value32==100 || value32==102 || value32==103
                                        
                                        || value32==109 || value32==112 || value32==115 || value32==116 || value32==117 || value32==121 || value32==123 || value32==124
                                        || value32==126 || value32==127 || value32==128 || value32==129 || value32==134 || value32==135 || value32==136
                                        || value32==139 || value32==143 || value32==145 || value32==146 || value32==148 || value32==150 || value32==151
                                        || value32==152 || value32==153 || value32==154 || value32==155 || value32==158 || value32==160 || value32==162 
                                        || value32==163 || value32==164 || value32==165 || value32==166 || value32==168 || value32==170 || value32==172 || value32==173 || value32==174 || value32==175 || value32==176 || value32==177
                                        || value32==186 || value32==187 || value32==188 || value32==190 || value32==191 || value32==193 || value32==195
                                        || value32==197 || value32==198 || value32==200 || value32==202 || value32==203 || value32==206 || value32==208 || value32==209
                                        || value32==211 || value32==212 || value32==213 || value32==214 || value32==219 || value32==220 || value32==221 || value32==222 || value32==223 || value32==224
                                        || value32==226 || value32==230 || value32==232 || value32==233 || value32==236 || value32==237 || value32==238 || value32==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(value32==5 || value32==7 || value32==9 || value32==12 || value32==25 || value32==34 || value32==35 || value32==61 || value32==76 || value32==84|| value32==88
                                        
                                        || value32==114 || value32==130 || value32==132 || value32==142 || value32==149 || value32==159 || value32==161 
                                        || value32==167 || value32==194 || value32==215 || value32==216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value32==11 || value32==14 || value32==15 || value32==18 || value32==22 || value32==23 || value32==26 || value32==30 || value32==38 || value32==40
                                        || value32==44 || value32==45 || value32==54 || value32==56 || value32==59 || value32==60 || value32==63 || value32==70 || value32==75 || value32==77 
                                        || value32==78 || value32==79 || value32==80 || value32==81 || value32==83 || value32==87 || value32==89 || value32==96 || value32==97 || value32==98 
                                        || value32==99 || value32==100 || value32==101 || value32==102 || value32==104 || value32==105
                                        
                                        || value32==108 || value32==110 || value32==111 || value32==113 || value32==118 || value32==120 || value32==125
                                        || value32==131 || value32==133 || value32==137 || value32==138 || value32==140 || value32==141
                                        || value32==144 || value32==147 || value32==156 || value32==157 || value32==169 || value32==171 || value32==178 || value32==179 || value32==180 || value32==181 || value32==182 || value32==183
                                        || value32==185 || value32==189 || value32==192 || value32==196 || value32==199 || value32==201 || value32==204 || value32==205
                                        || value32==207 || value32==210 || value32==218 || value32==225 || value32==231 || value32==234 || value32==235 || value32==237 || value32==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(value32==21 || value32==57 || value32==106 || value32==107 || value32==119 || value32==187 || value32==217)
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
                                    <select className="text-start form-select" name='RF_Nationality1' id='RF_Nationality1' value={value33} onChange={handleChange33}  aria-label="Default select example">
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
                                    
                                    if(value33==1 || value33==2 || value33==3 || value33==4 || value33==6 || value33==8 || value33==10 || value33==13 || value33==16 || value33==17 || value33==19 || value33==20 || value33==24 || value33==27
                                        || value33==28 || value33==29 || value33==31 || value33==32 || value33==33 || value33==36 || value33==37 || value33==39 || value33==41 || value33==42 || value33==43 || value33==46 || value33==47 || value33==48 || value33==49 || value33==50 || value33==51 || value33==52 || value33==53
                                        || value33==55 || value33==58 || value33==62 || value33==64 || value33==65 || value33==66 || value33==67 || value33==68 || value33==69 || value33==71 || value33==72 || value33==73 || value33==74
                                        || value33==82 || value33==85 || value33==86 || value33==90 || value33==91 || value33==92 || value33==93
                                        || value33==94 || value33==95 || value33==97 || value33==98 || value33==99 || value33==100 || value33==103 
                                        
                                        || value33==109 || value33==112  || value33==115 || value33==116 || value33==117 || value33==121 || value33==123  || value33==124
                                        || value33==126 || value33==127  || value33==128 || value33==129 || value33==134 || value33==135 || value33==136
                                        || value33==139 || value33==143  || value33==145 || value33==146 || value33==148 || value33==150 || value33==151
                                        || value33==152 || value33==153 || value33==154 || value33==155 || value33==158 || value33==160 || value33==162 
                                        || value33==163 || value33==164 || value33==165 || value33==166 || value33==168 || value33==170 || value33==172 || value33==173 || value33==174 || value33==175 || value33==176 || value33==177
                                        || value33==186 || value33==187 || value33==188 || value33==190 || value33==191 || value33==193 || value33==195
                                        || value33==197 || value33==198 || value33==200 || value33==202 || value33==203 || value33==206 || value33==208 || value33==209
                                        || value33==211 || value33==212 || value33==213 || value33==214 || value33==219 || value33==220 || value33==221 || value33==222 || value33==223 || value33==224
                                        || value33==226 || value33==230 || value33==232 || value33==233 || value33==236 || value33==237 || value33==238 || value33==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value33==5 || value33==7 || value33==9 || value33==12 || value33==25 || value33==34 || value33==35 || value33==61 || value33==76 || value33==84 || value33==88
                                        
                                        || value33==114 || value33==130 || value33==132 || value33==142 || value33==149 || value33==159 || value33==161 
                                        || value33==167 || value33==194 || value33==215 || value33==216 )
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">1</label>
                                            
                                        </>);
                                    }

                                    else if(value33==11 || value33==14 || value33==15 || value33==18 || value33==22 || value33==23 || value33==26 || value33==30 || value33==38 || value33==40 || value33==44 || value33==45
                                        || value33==54 || value33==56 || value33==59 || value33==60 || value33==63 || value33==70 || value33==75 || value33==77 || value33==78 || value33==79 || value33==80 || value33==81
                                        || value33==83 || value33==87 || value33==89 || value33==96 || value33==101 || value33==104 || value33==105
                                        
                                        || value33==108 || value33==110 || value33==111 || value33==113 || value33==118 || value33==120 || value33==125
                                        || value33==131 || value33==133 || value33==137 || value33==138 || value33==140 || value33==141
                                        || value33==144 || value33==147 || value33==156 || value33==157 || value33==169 || value33==171 || value33==178 || value33==179 || value33==180 || value33==181 || value33==182 || value33==183
                                        || value33==185 || value33==189 || value33==192 || value33==196 || value33==199 || value33==201 || value33==204 || value33==205
                                        || value33==207 || value33==210 || value33==218 || value33==225 || value33==231 || value33==234 || value33==235 || value33==237 || value33==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">2</label>
                                            
                                        </>);
                                    }

                                    else if(value33==21 || value33==57 || value33==106 || value33==107 || value33==119 || value33==187 || value33==217 )
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
                                    
                                    if(value33==1 || value33==2 || value33==3 || value33==4 || value33==6 || value33==8 || value33==10 || value33==13 || value33==16 || value33==17 || value33==19 || value33==20 || value33==24
                                        || value33==27 || value33==28 || value33==29 || value33==30 || value33==31 || value33==32 || value33==33 || value33==36 || value33==37 || value33==39 || value33==41 || value33==42 || value33==43
                                        || value33==46 || value33==47 || value33==48 || value33==49 || value33==50 || value33==51 || value33==52 || value33==53 || value33==55 || value33==58 || value33==62 || value33==64 || value33==65 || value33==66 
                                        || value33==67 || value33==68 || value33==69 || value33==70 || value33==71 || value33==72 || value33==73 || value33==74 || value33==82 || value33==85 || value33==86 || value33==90 || value33==91 || value33==92 || value33==93
                                        || value33==94 || value33==95 || value33==96 || value33==97 || value33==98 || value33==99 || value33==100 || value33==102 || value33==103
                                        
                                        || value33==109 || value33==112 || value33==115 || value33==116 || value33==117 || value33==121 || value33==123 || value33==124
                                        || value33==126 || value33==127 || value33==128 || value33==129 || value33==134 || value33==135 || value33==136
                                        || value33==139 || value33==143 || value33==145 || value33==146 || value33==148 || value33==150 || value33==151
                                        || value33==152 || value33==153 || value33==154 || value33==155 || value33==158 || value33==160 || value33==162 
                                        || value33==163 || value33==164 || value33==165 || value33==166 || value33==168 || value33==170 || value33==172 || value33==173 || value33==174 || value33==175 || value33==176 || value33==177
                                        || value33==186 || value33==187 || value33==188 || value33==190 || value33==191 || value33==193 || value33==195
                                        || value33==197 || value33==198 || value33==200 || value33==202 || value33==203 || value33==206 || value33==208 || value33==209
                                        || value33==211 || value33==212 || value33==213 || value33==214 || value33==219 || value33==220 || value33==221 || value33==222 || value33==223 || value33==224
                                        || value33==226 || value33==230 || value33==232 || value33==233 || value33==236 || value33==237 || value33==238 || value33==239)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">9</label>
                                            
                                        </>);
                                    }

                                    else if(value33==5 || value33==7 || value33==9 || value33==12 || value33==25 || value33==34 || value33==35 || value33==61 || value33==76 || value33==84|| value33==88
                                        
                                        || value33==114 || value33==130 || value33==132 || value33==142 || value33==149 || value33==159 || value33==161 
                                        || value33==167 || value33==194 || value33==215 || value33==216)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">3</label>
                                            
                                        </>);
                                    }

                                    else if(value33==11 || value33==14 || value33==15 || value33==18 || value33==22 || value33==23 || value33==26 || value33==30 || value33==38 || value33==40
                                        || value33==44 || value33==45 || value33==54 || value33==56 || value33==59 || value33==60 || value33==63 || value33==70 || value33==75 || value33==77 
                                        || value33==78 || value33==79 || value33==80 || value33==81 || value33==83 || value33==87 || value33==89 || value33==96 || value33==97 || value33==98 
                                        || value33==99 || value33==100 || value33==101 || value33==102 || value33==104 || value33==105
                                        
                                        || value33==108 || value33==110 || value33==111 || value33==113 || value33==118 || value33==120 || value33==125
                                        || value33==131 || value33==133 || value33==137 || value33==138 || value33==140 || value33==141
                                        || value33==144 || value33==147 || value33==156 || value33==157 || value33==169 || value33==171 || value33==178 || value33==179 || value33==180 || value33==181 || value33==182 || value33==183
                                        || value33==185 || value33==189 || value33==192 || value33==196 || value33==199 || value33==201 || value33==204 || value33==205
                                        || value33==207 || value33==210 || value33==218 || value33==225 || value33==231 || value33==234 || value33==235 || value33==237 || value33==238)
                                    {
                                        return (<>
                                            
                                            <label className="col-form-label">6</label>
                                            
                                        </>);
                                    }

                                    else if(value33==21 || value33==57 || value33==106 || value33==107 || value33==119 || value33==187 || value33==217)
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
                        
                        if(value6==1)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Accept with standard controls</label>
                                
                            </>);
                        }

                        if(value6==2)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Conduct Enhanced Due Diligence</label>
                                
                            </>);
                        }

                        if(value6==3 || value6==6)
                        {
                            return (<>
                                
                                 <label className="col-form-label">Accept with simplified or standard Due Diligence</label>
                                
                            </>);
                        }

                        if(value6==4 || value6==7)
                        {
                            return (<>
                                
                                    <label className="col-form-label">Accept with standard controls</label>
                                

                            </>);
                        }

                        if(value6==5 || value6==8 || value6==11)
                        {
                            return (<>
                                
                                    <label className="col-form-label">Conduct Enhanced Due Diligence</label>
                                
                            </>);
                        }

                        
                        if(value6==9 || value6==10)
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
                    <input spellCheck="true" id="RF_Control1" name='RF_Control1' className="form-control" value={FormData['RF_Control1']} onChange={(e) => {onChange(e)}} style={{height:"80px"}} placeholder=""  aria-describedby="" />
                 </div>

                 <div className="col-2">
                    <label className="col-form-label">Add another control?</label>
                </div>

                <div className="col-2">
                    <select className="text-start form-select" name='RF_Another_Control1' id='RF_Another_Control1' value={value34} onChange={handleChange34}  aria-label="Default select example">
                        <option value="0" selected></option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select> 
                </div>

                {(() => { 
                    
                               
                    if(value34==1)
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
                            <input spellCheck="true" id="RF_Control2" name='RF_Control2' className="form-control" style={{height:"80px"}}  value={FormData['RF_Control2']} onChange={(e) => {onChange(e)}} placeholder=""  aria-describedby="" />
                        </div>

                        <div className="col-2">
                            <label className="col-form-label">Add another control?</label>
                        </div>

                        <div className="col-2">
                            <select className="text-start form-select" name='RF_Another_Control2' id='RF_Another_Control2' value={value35} onChange={handleChange35}  aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select> 
                        </div>

                        {(() => { 
                    
                               
                            if(value35==1)
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
                                        <input spellCheck="true" id="RF_Control3" name='RF_Control3' className="form-control" style={{height:"80px"}} placeholder=""  aria-describedby="" />
                                    </div>

                                </>)
                                }
                                })()}
                                            
                            </>);
                    }

                                  

            
                })()}

            </div>
        </div>

        <div className="container1">
            <div className="icon1 update">
                <div className="tooltip1">
                    Update
                </div>
                <span><button type="submit" style={{border: "none", backgroundColor: "transparent"}}><i className="fa-solid fa-check" /></button></span>
            </div>
        </div>

        </form>
        
    </>
    )
 }
export default RiskFactors

//&DqWa5u93Ue6

   
