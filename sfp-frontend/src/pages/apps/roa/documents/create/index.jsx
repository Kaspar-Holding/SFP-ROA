import DashboardLayout from '@/hocs/DashboardLayout'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CreateDocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const CreateROADocument = () => {
    
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)

    const [ClientOccupation, setClientOccupation] = useState(1)
    const [ClientOccupationWeight, setClientOccupationWeight] = useState(1)
    const [RF_CountryOfBirth_Score, setRF_CountryOfBirth_Score] = useState(2)
    const [RF_Country_Weight, setRF_Country_Weight] = useState(3)
    const [RF_CountryOfResidence_Score, setRF_CountryOfResidence_Score] = useState(2)
    const [RF_Nationality_Score, setRF_Nationality_Score] = useState(2)
    const [RF_CountryOfTax_Score, setRF_CountryOfTax_Score] = useState(0)
    const [RF_Industry_Score, setRF_Industry_Score] = useState(0)
    const [RF_Industry_Weight, setRF_Industry_Weight] = useState(1)
    const [RF_SourceOfFunds_Score, setRF_SourceOfFunds_Score] = useState(3)
    const [RF_SourceOfFunds_Weight, setRF_SourceOfFunds_Weight] = useState(1)
    const [RF_RelationshipToClient_Score, setRF_RelationshipToClient_Score] = useState(1)
    const [RF_RelationshipToClient_Weight, setRF_RelationshipToClient_Weight] = useState(1)
    const [ClientIndividualRiskScore, setClientIndividualRiskScore] = useState(ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
    const [ClientIndividualRiskLevelScore, setClientIndividualRiskLevelScore] = useState(49)
    const [ClientIndividualRiskLevel, setClientIndividualRiskLevel] = useState(Math.round(ClientIndividualRiskScore / ClientIndividualRiskLevelScore * 100, 2))
    const [ClientIndividualRiskLevelLabel, setClientIndividualRiskLevelLabel] = useState('Medium')
    // Legal
    const [RF_CountryOfRegistration_Score, setRF_CountryOfRegistration_Score] = useState(2)
    const [RF_CountryOfOperation_Score, setRF_CountryOfOperation_Score] = useState(2)
    const [RF_Type_Legal_Entity_Score, setRF_Type_Legal_Entity_Score] = useState(2)
    const [RF_Type_Legal_Entity_Weight, setRF_Type_Legal_Entity_Weight] = useState(1)
    const [ClientLegalRiskScore, setClientLegalRiskScore] = useState(ClientOccupation + (RF_Type_Legal_Entity_Score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
    const [ClientLegalRiskLevelScore, setClientLegalRiskLevelScore] = useState(37)
    const [ClientLegalRiskLevel, setClientLegalRiskLevel] = useState(Math.round(ClientLegalRiskScore / ClientLegalRiskLevelScore * 100, 2))
    const [ClientLegalRiskLevelLabel, setClientLegalRiskLevelLabel] = useState('Medium')
    // Section C
    const [RF_Transaction_Method_Score, setRF_Transaction_Method_Score] = useState(0)
    const [RF_Transaction_Method_Weight, setRF_Transaction_Method_Weight] = useState(2)
    const [RF_Transaction_Reason_Score, setRF_Transaction_Reason_Score] = useState(0)
    const [RF_Transaction_Reason_Weight, setRF_Transaction_Reason_Weight] = useState(2)
    const [RF_High_Transaction_Reason_Score, setRF_High_Transaction_Reason_Score] = useState(0)
    const [RF_High_Transaction_Reason_Weight, setRF_High_Transaction_Reason_Weight] = useState(2)
    const [RF_Transaction_Frequency_Score, setRF_Transaction_Frequency_Score] = useState(0)
    const [RF_Transaction_Frequency_Weight, setRF_Transaction_Frequency_Weight] = useState(1)
    const [RF_Transaction_Geography_Score, setRF_Transaction_Geography_Score] = useState(0)
    const [RF_Transaction_Geography_Weight, setRF_Transaction_Geography_Weight] = useState(1)
    const [RF_Funds_Jurisdiction_Score, setRF_Funds_Jurisdiction_Score] = useState(0)
    const [RF_Funds_Jurisdiction_Weight, setRF_Funds_Jurisdiction_Weight] = useState(3)
    const [RF_Linked_Party_Acting_Score, setRF_Linked_Party_Acting_Score] = useState(0)
    const [RF_Linked_Party_Acting_Weight, setRF_Linked_Party_Acting_Weight] = useState(1)
    const [RF_Linked_Party_Paying_Score, setRF_Linked_Party_Paying_Score] = useState(0)
    const [RF_Linked_Party_Paying_Weight, setRF_Linked_Party_Paying_Weight] = useState(1)
    const [TransactionInFlowRiskScore, setTransactionInFlowRiskScore] = useState((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
    const [TransactionInFlowRiskLevelScore, setTransactionInFlowRiskLevelScore] = useState(27)
    const [TransactionInFlowRiskLevel, setTransactionInFlowRiskLevel] = useState(Math.round(TransactionInFlowRiskScore / TransactionInFlowRiskLevelScore * 100, 2))
    const [TransactionInFlowRiskLevelLabel, setTransactionInFlowRiskLevelLabel] = useState('Low')
    // console.log(TransactionInFlowRiskScore, RF_Funds_Jurisdiction_Score , RF_Funds_Jurisdiction_Weight , RF_Transaction_Method_Score , RF_Transaction_Method_Weight , RF_Transaction_Reason_Score , RF_Transaction_Reason_Weight , RF_High_Transaction_Reason_Score , RF_High_Transaction_Reason_Weight , RF_Transaction_Frequency_Score , RF_Transaction_Frequency_Weight , RF_Transaction_Geography_Score , RF_Transaction_Geography_Weight , RF_Linked_Party_Acting_Score , RF_Linked_Party_Acting_Weight , RF_Linked_Party_Paying_Score , RF_Linked_Party_Paying_Weight)
    // Outflow
    const [RF_Inception_Timeframe_Score, setRF_Inception_Timeframe_Score] = useState(0)
    const [RF_Inception_Timeframe_Weight, setRF_Inception_Timeframe_Weight] = useState(1)
    const [TransactionOutFlowRiskScore, setTransactionOutFlowRiskScore] = useState((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
    const [TransactionOutFlowRiskLevelScore, setTransactionOutFlowRiskLevelScore] = useState(30)
    const [TransactionOutFlowRiskLevel, setTransactionOutFlowRiskLevel] = useState(Math.round(TransactionOutFlowRiskScore / TransactionOutFlowRiskLevelScore * 100, 2))
    const [TransactionOutFlowRiskLevelLabel, setTransactionOutFlowRiskLevelLabel] = useState('Low')
    // console.log(TransactionInFlowRiskScore, RF_Funds_Jurisdiction_Score , RF_Funds_Jurisdiction_Weight , RF_Transaction_Method_Score , RF_Transaction_Method_Weight , RF_Transaction_Reason_Score , RF_Transaction_Reason_Weight , RF_High_Transaction_Reason_Score , RF_High_Transaction_Reason_Weight , RF_Transaction_Frequency_Score , RF_Transaction_Frequency_Weight , RF_Transaction_Geography_Score , RF_Transaction_Geography_Weight , RF_Linked_Party_Acting_Score , RF_Linked_Party_Acting_Weight , RF_Linked_Party_Paying_Score , RF_Linked_Party_Paying_Weight)
    // Section D
    const [DReputationRiskLevel, setDReputationRiskLevel] = useState(0)
    const [DReputationRiskLevelLabel, setDReputationRiskLevelLabel] = useState('Low')
    const Date_Var = new Date()
    const CurrentData = Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + (Date_Var.getDate())).slice(-2)
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
    
        advisorId : user['id'],           
        RF_Overall_Risk : "",
        RF_BU_Risk : "2",
        RF_Date : CurrentData,
        RF_ClientName : "",
        RF_ClientId : "",
        RF_CompleteByName : user["first_name"] + " " + user["last_name"],
        RF_EventID : "",
        RF_CompleteByRole : "",

        RF_AdjustedRisk : "",
        RF_GCO_Risk : "",
        RF_Approvals : "",

        RF_ClientType : "1",
        RF_Occupation : "1",
        RF_CountryOfBirth : "207",
        RF_CountryOfResidence : "207",
        RF_Nationality : "207",
        RF_Different_Nationality : "2",
        RF_CountryOfTax : "0",
        RF_Industry : "1",
        RF_SourceOfFunds : "1",
        RF_RelationshipToClient : "2",
        RF_CountryOfRegistration : "207",
        RF_CountryOfOperation : "207",
        RF_Type_Legal_Entity : "1",
        RF_Client_Relationship : "0",
        RF_Product_Name : "7",
        RF_Product_Category : "",
        RF_Transaction_Flow : "1",
        RF_Transaction_Method : "0",
        RF_Transaction_Reason : "0",
        RF_High_Transaction_Reason : "0",
        RF_Transaction_Frequency : "0",
        RF_Transaction_Value : "0",
        RF_Currency_Value : "ZAR",
        RF_Transaction_Geography : "0",
        RF_Funds_Jurisdiction : "0",
        RF_Delivery_Channel : "0",
        RF_Inception_Timeframe : "0",
        RF_Linked_Party_Acting : "0",
        RF_Linked_Party_Paying : "0",
        RF_Client_Match : "0",
        RF_Client_Beneficiaries : "0",
    })
    const [LP_Data, setLP_Data] = useState([{
        advisorId : user['id'],  
        RF_LP_Adjust_Risk : 0,
        RF_LP_Name : "",
        RF_LP_Client_ID : "",
        RF_LP_Client_Relationship : 0,
        RF_LP_ID : "",
        RF_LP_Linked_Party : 0,
        RF_LP_RCA : 0,
        RF_LP_Birth_Country : 207,
        RF_LP_Residence_Country : 207,
        RF_LP_Nationality : 207,
    }])
    const AddNewLP_Data = (e) => {
        const current = [...LP_Data]
        current.push({
            advisorId : user['id'],  
            RF_LP_Adjust_Risk : 0,
            RF_LP_Name : "",
            RF_LP_Client_ID : "",
            RF_LP_Client_Relationship : 0,
            RF_LP_ID : "",
            RF_LP_Linked_Party : 0,
            RF_LP_RCA : 0,
            RF_LP_Birth_Country : 207,
            RF_LP_Residence_Country : 207,
            RF_LP_Nationality : 207,
        })
        setLP_Data(current)
    }
    const RemoveNewLP_Data = (e) => {
        const current = [...LP_Data]
        current.pop()
        setLP_Data(current)
    }
    const on_LP_Change = (e, i) => {
        let newLP_Data = [...LP_Data]
        newLP_Data[i][e.target.name] = e.target.value
        setLP_Data(newLP_Data)
    }
    // console.log(FormData)   
    const onChange = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value})
        UpdateScore(e.target.name, e.target.value)
    }
    // Score Calculator
    const UpdateScore = (inputName, inputValue) => {
        // RF Occupation Risk Score 
        if (inputName == 'RF_Occupation'){
            if(inputValue==1 || inputValue==2 || inputValue==3 || inputValue==5)
            {
                setClientOccupation(1)                
                setClientIndividualRiskScore(1  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round((1  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight)) / ClientIndividualRiskLevelScore * 100, 2))
            } 
            
            else if(inputValue==4 || inputValue==6)
            {
                setClientOccupation(3)
                setClientIndividualRiskScore(3  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round((3  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight)) / ClientIndividualRiskLevelScore * 100, 2))

            }
        }
        if (inputName == 'RF_CountryOfBirth'){
            let score = countryScore(inputValue)
            setRF_CountryOfBirth_Score(score)                                
            setClientIndividualRiskScore(ClientOccupation  + (score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                     
            setClientIndividualRiskLevel(Math.round(
                (ClientOccupation  + (score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                / 
                ClientIndividualRiskLevelScore * 100, 2)
            )
        }
        
        if (inputName == 'RF_CountryOfResidence'){
            let score = countryScore(inputValue)
            setRF_CountryOfResidence_Score(score)                                
            setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                      
            setClientIndividualRiskLevel(Math.round(
                (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                      
                / 
                ClientIndividualRiskLevelScore * 100, 2)
            )
        }
        
        if (inputName == 'RF_Nationality'){
            let score = countryScore(inputValue)
            setRF_Nationality_Score(score)                                
            setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                           
            setClientIndividualRiskLevel(Math.round(
                (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                           
                / 
                ClientIndividualRiskLevelScore * 100, 2)
            )
        }
        
        
        if (inputName == 'RF_CountryOfTax'){
            let score = countryScore(inputValue)
            setRF_CountryOfTax_Score(score)                                
            setClientIndividualRiskScore(ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                           
            setClientIndividualRiskLevel(Math.round(
                (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                           
                / 
                ClientIndividualRiskLevelScore * 100, 2)
            )
        }
        
        if (inputName == 'RF_CountryOfRegistration'){
            let score = countryScore(inputValue)
            setRF_CountryOfTax_Score(score)                                
            setClientLegalRiskScore((RF_Type_Legal_Entity_Score * RF_Type_Legal_Entity_Weight) + (score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
            setClientLegalRiskLevel(Math.round(
                (ClientOccupation + (RF_Type_Legal_Entity_Score * RF_Type_Legal_Entity_Weight) + (score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                / 
                ClientLegalRiskLevelScore * 100, 2)
            )
        }
        
        if (inputName == 'RF_CountryOfOperation'){
            let score = countryScore(inputValue)
            setRF_CountryOfTax_Score(score)                                
            setClientLegalRiskScore((RF_Type_Legal_Entity_Score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
            setClientLegalRiskLevel(Math.round(
                (ClientOccupation + (RF_Type_Legal_Entity_Score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                / 
                ClientLegalRiskLevelScore * 100, 2)
            )
        }
        
        if (inputName == 'RF_Funds_Jurisdiction'){
            let score = countryScore(inputValue)
            setTransactionInFlowRiskLevelScore(39)
            setRF_Funds_Jurisdiction_Score(score)
            setTransactionInFlowRiskScore((score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
            setTransactionInFlowRiskLevel(
                Math.round(
                    ((score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                    / 
                    39 * 100, 2
                )
            )
            setTransactionOutFlowRiskLevelScore(42)
            setRF_Funds_Jurisdiction_Score(score)
            setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
            setTransactionOutFlowRiskLevel(
                Math.round(
                    ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                    / 
                    42 * 100, 2
                )
            )
        
        }

        if (inputName == 'RF_Different_Nationality') {
            if (inputValue == 1){
                let score = countryScore(FormData['RF_CountryOfTax'])
                setRF_CountryOfTax_Score(score)
                setClientIndividualRiskScore(ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (score * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            else{
                setRF_CountryOfTax_Score(0)
                setClientIndividualRiskScore(ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (0 * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (0 * RF_Country_Weight) + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
        }
        if (inputName == 'RF_Industry'){
            if(parseInt(inputValue)===1 || parseInt(inputValue)===3 || parseInt(inputValue)===15 || parseInt(inputValue)===19)
            {
                setRF_Industry_Score(1)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (1 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (1 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===25)
            {
                setRF_Industry_Score(0)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (0 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (0 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            
            else if(parseInt(inputValue)===2 || parseInt(inputValue)===12 || parseInt(inputValue)===14 || parseInt(inputValue)===16 || parseInt(inputValue)===17 || parseInt(inputValue)===20 || parseInt(inputValue)===23 || parseInt(inputValue)===24
            || parseInt(inputValue)===26 || parseInt(inputValue)===27 || parseInt(inputValue)===28 || parseInt(inputValue)===30 || parseInt(inputValue)===34)
            {
                setRF_Industry_Score(3)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (3 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (3 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            else if(parseInt(inputValue)===4 || parseInt(inputValue)===5 || parseInt(inputValue)===6 || parseInt(inputValue)===7 || parseInt(inputValue)===8 || parseInt(inputValue)===9 || parseInt(inputValue)===10 || parseInt(inputValue)===11 || parseInt(inputValue)===13
            || parseInt(inputValue)===18 || parseInt(inputValue)===21 || parseInt(inputValue)===22 || parseInt(inputValue)===29 || parseInt(inputValue)===32 || parseInt(inputValue)===33)
            {
                setRF_Industry_Score(2)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (2 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (2 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===31)
            {
                setRF_Industry_Score(4)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (4 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (4 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else
            {
                setRF_Industry_Score(0)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (0 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (0 * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
        }
        
        if (inputName == 'RF_SourceOfFunds'){
            if(parseInt(inputValue)===1 || parseInt(inputValue)===6 || parseInt(inputValue)===12 || parseInt(inputValue)===13 || parseInt(inputValue)===16)
            {
                setRF_SourceOfFunds_Score(4)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (4 * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (4 * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===2 || parseInt(inputValue)===3 || parseInt(inputValue)===8 || parseInt(inputValue)===9 || parseInt(inputValue)===14 || parseInt(inputValue)===17 || parseInt(inputValue)===18 || parseInt(inputValue)===20
            || parseInt(inputValue)===22 || parseInt(inputValue)===23 || parseInt(inputValue)===25 || parseInt(inputValue)===26 || parseInt(inputValue)===29 || parseInt(inputValue)===31 || parseInt(inputValue)===32 || parseInt(inputValue)===33)
            {
                setRF_SourceOfFunds_Score(1)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (1 * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (1 * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===4 || parseInt(inputValue)===5 || parseInt(inputValue)===7 || parseInt(inputValue)===10 || parseInt(inputValue)===11 || parseInt(inputValue)===15 || parseInt(inputValue)===19 || parseInt(inputValue)===24
            || parseInt(inputValue)===27 || parseInt(inputValue)===28 || parseInt(inputValue)===30)
            {
                
                setRF_SourceOfFunds_Score(2)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (2 * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (2 * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===21)
            {
                setRF_SourceOfFunds_Score(0)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (0 * RF_SourceOfFunds_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (0 * RF_SourceOfFunds_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
        }
        
        if (inputName == 'RF_RelationshipToClient'){
            if(parseInt(inputValue)===1 || parseInt(inputValue)===2 || parseInt(inputValue)===4 || parseInt(inputValue)===6 || parseInt(inputValue)===7 || parseInt(inputValue)===9 || parseInt(inputValue)===11 
            || parseInt(inputValue)===13 || parseInt(inputValue)===15)
            {
                setRF_RelationshipToClient_Score(0)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight) + (0 * RF_RelationshipToClient_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight) + (0 * RF_RelationshipToClient_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }
            
            else if(parseInt(inputValue)===3 || parseInt(inputValue)===5 || parseInt(inputValue)===8 || parseInt(inputValue)===10 || parseInt(inputValue)===12 || parseInt(inputValue)===14 || parseInt(inputValue)===16)
            {
                setRF_RelationshipToClient_Score(2)
                setClientIndividualRiskScore(ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight) + (2 * RF_RelationshipToClient_Weight))
                setClientIndividualRiskLevel(Math.round(
                    (ClientOccupation  + RF_CountryOfBirth_Score * RF_Country_Weight + RF_CountryOfResidence_Score * RF_Country_Weight + RF_Nationality_Score * RF_Country_Weight + RF_CountryOfTax_Score * RF_Country_Weight + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight) + (2 * RF_RelationshipToClient_Weight))
                    / 
                    ClientIndividualRiskLevelScore * 100, 2)
                )
            }

        }
        
        if (inputName == 'RF_Type_Legal_Entity'){
            if(inputValue == 1 || inputValue == 4 || inputValue == 6 || inputValue == 8 || inputValue == 13 || inputValue == 15 || inputValue == 16
                || inputValue == 20 || inputValue == 21 || inputValue == 25)
            {
                let score = 1
                setRF_Type_Legal_Entity_Score(score)                                
                setClientLegalRiskScore((score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                setClientLegalRiskLevel(Math.round(
                    (ClientOccupation + (score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                    / 
                    ClientLegalRiskLevelScore * 100, 2)
                )
            }

            else if(inputValue == 2 || inputValue == 3 || inputValue == 7 || inputValue == 9 || inputValue == 10 || inputValue == 11 || inputValue == 12
                || inputValue == 17 || inputValue == 18 || inputValue == 22 || inputValue == 23)
            {
                let score = 3
                setRF_Type_Legal_Entity_Score(score)                                
                setClientLegalRiskScore((score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                setClientLegalRiskLevel(Math.round(
                    (ClientOccupation + (score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                    / 
                    ClientLegalRiskLevelScore * 100, 2)
                )
            }

            else if(inputValue == 5 || inputValue == 14 || inputValue == 19 || inputValue == 24)
            {
                let score = 2
                setRF_Type_Legal_Entity_Score(score)                                
                setClientLegalRiskScore((score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                setClientLegalRiskLevel(Math.round(
                    (ClientOccupation + (score * RF_Type_Legal_Entity_Weight) + (RF_CountryOfRegistration_Score * RF_Country_Weight) + (RF_CountryOfOperation_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))                         
                    / 
                    ClientLegalRiskLevelScore * 100, 2)
                )
            }

        }

        if (inputName == 'RF_Transaction_Method') {
            if(parseInt(inputValue)===1 || parseInt(inputValue)===4 || parseInt(inputValue)===5 || parseInt(inputValue)===7 || parseInt(inputValue)===8)
            {
                let score = 2
                setRF_Transaction_Method_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }
            
            else if(parseInt(inputValue)===2 || parseInt(inputValue)===11)
            {
                let score = 3
                setRF_Transaction_Method_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }
            
            else if(parseInt(inputValue)===3 || parseInt(inputValue)===6 || parseInt(inputValue)===9 || parseInt(inputValue)===10 || parseInt(inputValue)===12)
            {
                let score = 1
                setRF_Transaction_Method_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } else{
                let score = 0
                setRF_Transaction_Method_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }
        }

        if (inputName == 'RF_Transaction_Reason') {
            if(inputValue===1)
            {
                let score = 2
                setRF_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            else if(inputValue!=0)
            {
                let score = 1
                setRF_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            else 
            {
                let score = 0
                setRF_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
        }

        if (inputName == 'RF_High_Transaction_Reason') {
            
            if(parseInt(inputValue)===1)
            {
                let score = 3
                setRF_High_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            else if(parseInt(inputValue)===2)
            {
                let score = 1
                setRF_High_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            
            else 
            {
                let score = 0
                setRF_High_Transaction_Reason_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
        }

        if (inputName == 'RF_Transaction_Frequency') {
            
            if(parseInt(inputValue)===1 || parseInt(inputValue)===2 || parseInt(inputValue)===3)
            {
                let score = 3
                setRF_Transaction_Frequency_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            else if(parseInt(inputValue)===4)
            {
                let score = 1
                setRF_Transaction_Frequency_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            
            
            else 
            {
                let score = 0
                setRF_Transaction_Frequency_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
        }

        if (inputName == 'RF_Transaction_Geography') {
            
            if(inputValue == 1)
            {
                let score = 2
                setRF_Transaction_Geography_Score(score)
                let jurisdictionScore = countryScore(FormData['RF_Funds_Jurisdiction'])
                setRF_Funds_Jurisdiction_Score(jurisdictionScore)
                setTransactionInFlowRiskLevelScore(39)
                setTransactionInFlowRiskScore((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        39 * 100, 2
                    )
                )
                setTransactionOutFlowRiskLevelScore(42)
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        42 * 100, 2
                    )
                )
                
                
            } 
            
            else if(inputValue == 2 || inputValue == 3)
            {
                let score = 1
                setRF_Transaction_Geography_Score(score)
                let jurisdictionScore = 0
                setRF_Funds_Jurisdiction_Score(jurisdictionScore)
                setTransactionInFlowRiskLevelScore(27)
                setTransactionInFlowRiskScore((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        27 * 100, 2
                    )
                )
                setTransactionOutFlowRiskLevelScore(30)
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        30 * 100, 2
                    )
                )
            } 
            else 
            {
                let score = 1
                setRF_Transaction_Geography_Score(score)
                let jurisdictionScore = 0
                setRF_Funds_Jurisdiction_Score(jurisdictionScore)
                setTransactionInFlowRiskLevelScore(27)
                setTransactionInFlowRiskScore((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        27 * 100, 2
                    )
                )
                setTransactionOutFlowRiskLevelScore(30)
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (jurisdictionScore + RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        30 * 100, 2
                    )
                )
            } 
        }
        
        if (inputName == 'RF_Linked_Party_Acting') {
            if(inputValue == 1 || inputValue == 2)
            {
                let score = 1
                setRF_Linked_Party_Acting_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            else if(inputValue == 3)
            {
                let score = 3
                setRF_Linked_Party_Acting_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            else 
            {
                let score = 0
                setRF_Linked_Party_Acting_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
                setTransactionOutFlowRiskScore((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((RF_Inception_Timeframe_Score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }            
        }
        
        if (inputName == 'RF_Linked_Party_Paying') {
            if(inputValue == 2 || inputValue == 3)
            {
                let score = 3
                setRF_Linked_Party_Paying_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            else 
            {
                let score = 0
                setRF_Linked_Party_Paying_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }            

        }
        
        if (inputName == 'RF_Inception_Timeframe') {
            if(inputValue == 1 || inputValue == 2)
            {
                let score = 1
                setRF_Inception_Timeframe_Score(score)
                setTransactionOutFlowRiskScore((score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionOutFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            else if(inputValue == 3 || inputValue == 4)
            {
                let score = 3
                setRF_Inception_Timeframe_Score(score)
                setTransactionOutFlowRiskScore((score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                setTransactionOutFlowRiskLevel(
                    Math.round(
                        ((score * RF_Inception_Timeframe_Weight) + (RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (RF_Linked_Party_Paying_Score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionOutFlowRiskLevelScore * 100, 2
                    )
                )
            } 
            else 
            {
                let score = 0
                setRF_Linked_Party_Paying_Score(score)
                setTransactionInFlowRiskScore((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                setTransactionInFlowRiskLevel(
                    Math.round(
                        ((RF_Funds_Jurisdiction_Score * RF_Funds_Jurisdiction_Weight) + (RF_Transaction_Method_Score * RF_Transaction_Method_Weight) + (RF_Transaction_Reason_Score * RF_Transaction_Reason_Weight) + (RF_High_Transaction_Reason_Score * RF_High_Transaction_Reason_Weight) + (RF_Transaction_Frequency_Score * RF_Transaction_Frequency_Weight)  + (RF_Transaction_Geography_Score * RF_Transaction_Geography_Weight) + (RF_Linked_Party_Acting_Score * RF_Linked_Party_Acting_Weight) + (score * RF_Linked_Party_Paying_Weight))
                        / 
                        TransactionInFlowRiskLevelScore * 100, 2
                    )
                )
            }            

        }

        if (inputName == "RF_Client_Match") {
            if(parseInt(inputValue)===1 || parseInt(inputValue)===4 || parseInt(inputValue)===7)
            {
                setDReputationRiskLevel(2)
            }

            
            if(parseInt(inputValue)===2 || parseInt(inputValue)===5 || parseInt(inputValue)===8 || parseInt(inputValue)===11)
            {
                setDReputationRiskLevel(3)
            }

            
            if(parseInt(inputValue)===3 || parseInt(inputValue)===6)
            {
                setDReputationRiskLevel(1)
            }

            if(parseInt(inputValue)===9 || parseInt(inputValue)===10)
            {
                setDReputationRiskLevel(4)
            }
        }



    }
    // Country Score
    const countryScore = (countryValue) => {
        if (
                countryValue == 1 || countryValue == 2 || countryValue == 3 || countryValue == 4 || countryValue == 5 
            || countryValue == 6 || countryValue == 7 || countryValue == 8 || countryValue == 9 || countryValue == 12 
            || countryValue == 13 || countryValue == 16 || countryValue == 19 || countryValue == 23 || countryValue == 25 
            || countryValue == 27 || countryValue == 28 || countryValue == 29 || countryValue == 31 || countryValue == 32 
            || countryValue == 33 || countryValue == 34 || countryValue == 37 || countryValue == 39 || countryValue == 40 
            || countryValue == 42 || countryValue == 43 || countryValue == 44 || countryValue == 47 || countryValue == 48 
            || countryValue == 49 || countryValue == 50 || countryValue == 51 || countryValue == 52 || countryValue == 53 
            || countryValue == 55 || countryValue == 58 || countryValue == 62 || countryValue == 64 || countryValue == 65 
            || countryValue == 66 || countryValue == 67 || countryValue == 68 || countryValue == 69 || countryValue == 71 
            || countryValue == 72 || countryValue == 73 || countryValue == 74 || countryValue == 78 || countryValue == 79 
            || countryValue == 80 || countryValue == 81 || countryValue == 82 || countryValue == 86 || countryValue == 88 
            || countryValue == 90 || countryValue == 92 || countryValue == 93 || countryValue == 94 || countryValue == 95 
            || countryValue == 97 || countryValue == 98 || countryValue == 99 || countryValue == 100 || countryValue == 106 
            || countryValue == 107 || countryValue == 109 || countryValue == 114 || countryValue == 116 || countryValue == 117 
            || countryValue == 118 || countryValue == 119 || countryValue == 121 || countryValue == 123 || countryValue == 124 
            || countryValue == 126 || countryValue == 128 || countryValue == 129 || countryValue == 130 || countryValue == 133 
            || countryValue == 134 || countryValue == 135 || countryValue == 136 || countryValue == 139 || countryValue == 141 
            || countryValue == 142 || countryValue == 143 || countryValue == 145 || countryValue == 146 || countryValue == 147 
            || countryValue == 148 || countryValue == 149 || countryValue == 150 || countryValue == 152 || countryValue == 153 
            || countryValue == 154 || countryValue == 155 || countryValue == 157 || countryValue == 158 || countryValue == 160 
            || countryValue == 162 || countryValue == 163 || countryValue == 164 || countryValue == 165 || countryValue == 166 
            || countryValue == 168 || countryValue == 170 || countryValue == 171 || countryValue == 172 || countryValue == 173 
            || countryValue == 174 || countryValue == 175 || countryValue == 176 || countryValue == 177 || countryValue == 182 
            || countryValue == 184 || countryValue == 186 || countryValue == 187 || countryValue == 188 || countryValue == 190 
            || countryValue == 191 || countryValue == 193 || countryValue == 194 || countryValue == 198 || countryValue == 200 
            || countryValue == 202 || countryValue == 206 || countryValue == 208 || countryValue == 209 || countryValue == 211 
            || countryValue == 212 || countryValue == 213 || countryValue == 214 || countryValue == 217 || countryValue == 219 
            || countryValue == 220 || countryValue == 221 || countryValue == 222 || countryValue == 223 || countryValue == 224 
            || countryValue == 225 || countryValue == 228 || countryValue == 229 || countryValue == 230 || countryValue == 231 
            || countryValue == 232 || countryValue == 233 || countryValue == 236 || countryValue == 239 || countryValue == 241 
            || countryValue == 242 || countryValue == 243 || countryValue == 245 || countryValue == 246 || countryValue == 247 
            || countryValue == 248 || countryValue == 249 || countryValue == 250
        ){
            return 3
        }

        else if(countryValue == 61 || countryValue == 76 || countryValue == 84 || countryValue == 132 || countryValue == 159 || countryValue == 161 || countryValue == 167 || countryValue == 201 || countryValue == 215 || countryValue == 216)
        {
            return 1
        }

        else if(countryValue == 10 || countryValue == 11 || countryValue == 14 || countryValue == 15 || countryValue == 17 || countryValue == 18 || countryValue == 20 || countryValue == 21 || countryValue == 22 || countryValue == 24 || countryValue == 26 || countryValue == 30 || countryValue == 35 || countryValue == 36 || countryValue == 38 || countryValue == 41 || countryValue == 45 || countryValue == 46 || countryValue == 54 || countryValue == 56 || countryValue == 57 || countryValue == 59 || countryValue == 60 || countryValue == 63 || countryValue == 70 || countryValue == 75 || countryValue == 77 || countryValue == 83 || countryValue == 85 || countryValue == 87 || countryValue == 89 || countryValue == 91 || countryValue == 96 || countryValue == 101 || countryValue == 102 || countryValue == 103 || countryValue == 104 || countryValue == 105 || countryValue == 108 || countryValue == 110 || countryValue == 111 || countryValue == 112 || countryValue == 113 || countryValue == 115 || countryValue == 120 || countryValue == 122 || countryValue == 125 || countryValue == 127 || countryValue == 131 || countryValue == 137 || countryValue == 138 || countryValue == 140 || countryValue == 144 || countryValue == 151 || countryValue == 156 || countryValue == 169 || countryValue == 178 || countryValue == 179 || countryValue == 180 || countryValue == 181 || countryValue == 183 || countryValue == 185 || countryValue == 189 || countryValue == 192 || countryValue == 195 || countryValue == 196 || countryValue == 197 || countryValue == 199 || countryValue == 203 || countryValue == 204 || countryValue == 205 || countryValue == 207 || countryValue == 210 || countryValue == 218 || countryValue == 226 || countryValue == 227 || countryValue == 234 || countryValue == 235 || countryValue == 237 || countryValue == 238 || countryValue == 240 || countryValue == 244)
        {
            return 2                
        }

        else if(countryValue==21 || countryValue==57 || countryValue==106 || countryValue==107 || countryValue==119 || countryValue==187 || countryValue==217)
        {
            return 4
        } else{
            return 0
        }
    }
    // Country Score
    
    const createRFForm = async(data, lp_data, clientindividualRisk, clientlegalRisk, transactionInflowRisk, transactionOutflowRisk, dReputationRisk, clientindividualRiskLabel, clientlegalRiskLabel, transactionInflowRiskLabel, transactionOutflowRiskLabel, dReputationRiskLabel, riskScoreData) => {
        setSuccessMessageVisibility("none")
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`
            }
        }
        const Body = JSON.stringify({
            'RF_Data' : data,
            'RF_Risk_Data' : riskScoreData,
            'Score_Data' : {
                Client_Individual_Risk : clientindividualRisk,
                Client_Legal_Risk : clientlegalRisk,
                Transaction_Inflow_Risk : transactionInflowRisk,
                Transaction_Outflow_Risk : transactionOutflowRisk,
                Reputation_Risk : dReputationRisk,
            },
            'Score_Label' : {
                Client_Individual_Risk : clientindividualRiskLabel,
                Client_Legal_Risk : clientlegalRiskLabel,
                Transaction_Inflow_Risk : transactionInflowRiskLabel,
                Transaction_Outflow_Risk : transactionOutflowRiskLabel,
                Reputation_Risk : dReputationRiskLabel,
            },
            'LP_Data' : lp_data
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add_risk_factors_data/`, Body ,config)
            // console.log(response.data['formData'])
            console.log(response?.data)
            if (response.status === 201) {
                setFormCreatedId(response.data['formId'])
                setFormCreatedStatus(true)
                setFormCreatedData(response.data['data'])
                
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `${response?.data?.message}`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                // navigate("/completeform", {state : {advisor: user, formId: response.data['formId'], clientName : data['RF_ClientName'], clientId: data['RF_ClientId']}})
            }
            // if (response.status === 200) {
            //     setErrorData({
            //         status: "HIGH Risk Level",
            //         message: "This form is rated HIGH and awaiting for approval"
            //     })
            //     setSuccessMessageVisibility("block")
            //     setSuccessMessage("HIGH Risk Level" + " : " + "This form is rated HIGH and awaiting for approval")
                
            //     setTimeout(() => {
            //         navigate("/")
            //     }, 5000)
            // }
            // setSubmissionMessageVisibility("block")
        } catch (error) {
            if (error?.response?.status == 406) {
                Swal.fire({
                    position: "bottom-end",
                    type: "error",
                    title: "FORM RATING WARNING",
                    html: `${error?.response?.data?.message}`,
                    showConfirmButton: !1,
                    timer: 10000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                setTimeout(() => {
                    navigate("/")
                }, 5000)
            }
        }
        setTimeout(() => {
            setSuccessMessageVisibility("none")
        }, 5000)
    }
    // console.log(localStorage.getItem('access'))

    const [FormCreatedStatus, setFormCreatedStatus] = useState(false)
    const [FormCreatedData, setFormCreatedData] = useState([])
    const [FormCreatedId, setFormCreatedId] = useState(0)
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
    
    const [Advisor, setAdvisor] = useState("")
    const onSubmit = e => {
        e.preventDefault()
        const riskData = {
            "ClientOccupation" : ClientOccupation,
            "ClientOccupationWeight" : ClientOccupationWeight,
            "RF_CountryOfBirth_Score" : RF_CountryOfBirth_Score,
            "RF_Country_Weight" : RF_Country_Weight,
            "RF_CountryOfResidence_Score" : RF_CountryOfResidence_Score,
            "RF_Nationality_Score" : RF_Nationality_Score,
            "RF_CountryOfTax_Score" : RF_CountryOfTax_Score,
            "RF_Industry_Score" : RF_Industry_Score,
            "RF_Industry_Weight" : RF_Industry_Weight,
            "RF_SourceOfFunds_Score" : RF_SourceOfFunds_Score,
            "RF_SourceOfFunds_Weight" : RF_SourceOfFunds_Weight,
            "RF_RelationshipToClient_Score" : RF_RelationshipToClient_Score,
            "RF_RelationshipToClient_Weight" : RF_RelationshipToClient_Weight,
            
            "RF_CountryOfRegistration_Score" : RF_CountryOfRegistration_Score,
            "RF_CountryOfOperation_Score" : RF_CountryOfOperation_Score,
            "RF_Type_Legal_Entity_Score" : RF_Type_Legal_Entity_Score,
            "RF_Type_Legal_Entity_Weight" : RF_Type_Legal_Entity_Weight,
            
            "RF_Transaction_Method_Score" : RF_Transaction_Method_Score,
            "RF_Transaction_Method_Weight" : RF_Transaction_Method_Weight,
            "RF_Transaction_Reason_Score" : RF_Transaction_Reason_Score,
            "RF_Transaction_Reason_Weight" : RF_Transaction_Reason_Weight,
            "RF_High_Transaction_Reason_Score" : RF_High_Transaction_Reason_Score,
            "RF_High_Transaction_Reason_Weight" : RF_High_Transaction_Reason_Weight,
            "RF_Transaction_Frequency_Score" : RF_Transaction_Frequency_Score,
            "RF_Transaction_Frequency_Weight" : RF_Transaction_Frequency_Weight,
            "RF_Transaction_Geography_Score" : RF_Transaction_Geography_Score,
            "RF_Transaction_Geography_Weight" : RF_Transaction_Geography_Weight,
            "RF_Funds_Jurisdiction_Score" : RF_Funds_Jurisdiction_Score,
            "RF_Funds_Jurisdiction_Weight" : RF_Funds_Jurisdiction_Weight,
            "RF_Linked_Party_Acting_Score" : RF_Linked_Party_Acting_Score,
            "RF_Linked_Party_Acting_Weight" : RF_Linked_Party_Acting_Weight,
            "RF_Linked_Party_Paying_Score" : RF_Linked_Party_Paying_Score,
            "RF_Linked_Party_Paying_Weight" : RF_Linked_Party_Paying_Weight,

            "RF_Inception_Timeframe_Score" : RF_Inception_Timeframe_Score,
            "RF_Inception_Timeframe_Weight" : RF_Inception_Timeframe_Weight,

            "ClientIndividualRiskScore" : ClientIndividualRiskScore,
            "ClientIndividualRiskLevel" : ClientIndividualRiskLevel,
            "ClientLegalRiskLevelScore" : ClientLegalRiskLevelScore,
            "ClientLegalRiskLevel" : ClientLegalRiskLevel,
            "TransactionInFlowRiskScore" : TransactionInFlowRiskScore,
            "TransactionInFlowRiskLevel" : TransactionInFlowRiskLevel,
            "TransactionOutFlowRiskScore" : TransactionOutFlowRiskScore,
            "TransactionOutFlowRiskLevel" : TransactionOutFlowRiskLevel,
            "DReputationRiskLevel" : DReputationRiskLevel,
        }
        Swal.fire({
            title: "Are you sure?",
            text: "Have you filled the whole form?",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#00788b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!",
            confirmButtonClass: "btn btn-primary",
            cancelButtonClass: "btn btn-danger ml-1",
            buttonsStyling: !1,
        }).then(function (t) {
            t.value
            ? 
            createRFForm(
                FormData, 
                LP_Data, ClientIndividualRiskLevel, ClientLegalRiskLevel, TransactionInFlowRiskLevel, TransactionOutFlowRiskLevel, DReputationRiskLevel, 
                ClientIndividualRiskLevelLabel, ClientLegalRiskLevelLabel, TransactionInFlowRiskLevelLabel, TransactionOutFlowRiskLevelLabel, DReputationRiskLevelLabel,
                riskData
            )
            : t.dismiss === Swal.DismissReason.cancel &&
                Swal.fire({
                    title: "Cancelled",
                    text: "Your form is still open.",
                    type: "error",
                    confirmButtonClass: "btn btn-success",
                });
        });      
        // window.location.reload();
    }
    if (FormCreatedStatus) {
        router.push('/roa/documents/complete')
    }


    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    
    if (user?.userType === 6) {
        router.push('/')
    }
    

    

    return (<></>)
}

export default CreateROADocument