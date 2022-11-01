import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
// import './Invest.css';

const Fiduciary = () => {
  const location = useLocation();
  const { state } = location;
  // const [propsData, setpropsData] = useState(props.data);
  const [FormData, setFormData] = useState({
    advisorId : state['advisorId'],
    formId : state['formId'],
    // clientIdNumber : propsData['clientIdNumber'],
    fiduciaryWillInPlace : "1",
    fiduciaryWillUpdationDate : "",
    fiduciaryWillKeepingPlace : "",
    fiduciaryExecutorDetails : "",
    fiduciaryClientInstructions : "",
    fiduciaryConsequencesExplained : "",
  });
  const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
  const createFiduciaryForm = async(data) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`
        }
    }
    const Body = JSON.stringify(data)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addfiduciarydata/`, Body ,config)
        // console.log(response.data['formData'])
        if (response.status === 201) {
            setFormData(response.data['formData'])
        } else {
            setFormData(response.data['formData'])
        }
        // setSubmissionMessageVisibility("block")
    } catch (error) {
        console.log(error)
    }
  }
  const updateForm = async() => {
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`
        }
    }
    const Body = JSON.stringify(FormData)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/updatefiduciarydata/`, Body ,config)
        // console.log(response.data['formData'])
        setFormData(response.data['formData'])
        // setSubmissionMessageVisibility("block")
    } catch (error) {
        console.log(error)
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    updateForm()
    // window.location.reload();
  }
  // console.log(FormData)
  useEffect(() => {
    createFiduciaryForm(FormData)
  }, []);
  
  // console.log(JSON.stringify(localStorage.getItem('access')))
  return(
      <>
      <br/>
      <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Fiduciary</b></div>
      <hr/>
          <form onSubmit={e => onSubmit(e)}>
                <div style={{fontSize:'14px'}} align="left">
                    <div className="row">
                      <div className="col-12" style={{paddingBottom: "0.5%"}}>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="address" className="col-form-label">Is there a valid Will in place?  </label>
                                </div>
                                <div className="col-1">
                                  <label className="radio-inline">
                                      <input type="radio" name="fiduciaryWillInPlace" checked={FormData['fiduciaryWillInPlace'] == "1" ? true : false} onChange={e => onChange(e)} value="1"/>Yes
                                  </label>
                                </div>
                                <div className="col-1">
                                  <label className="radio-inline">
                                      <input type="radio" name="fiduciaryWillInPlace" checked={FormData['fiduciaryWillInPlace'] == "1" ? false : true} onChange={e => onChange(e)} value="0"/>No
                                  </label>
                                </div>
                            </div>

                          <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryWillUpdationDate" className="col-form-label">Date last updated? </label>
                                </div>
                                <div className="col-6">
                                  <input spellCheck="true"  type="date" id="fiduciaryWillUpdationDate" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryWillUpdationDate']}  name="fiduciaryWillUpdationDate" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryWillKeepingPlace" className="col-form-label">Where is the will kept? </label>
                                </div>
                                <div className="col-6">
                                  <input spellCheck="true" id="fiduciaryWillKeepingPlace" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryWillKeepingPlace']} name="fiduciaryWillKeepingPlace" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryExecutorDetails" className="col-form-label">Details of Executor?</label>
                                </div>
                                <div className="col-6">
                                  <input spellCheck="true" id="fiduciaryExecutorDetails" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryExecutorDetails']} name="fiduciaryExecutorDetails" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryClientInstructions" className="col-form-label">Client instruction in terms of drafting a Will? </label>
                                </div>
                                <div className="col-6">
                                  <input spellCheck="true"  id="fiduciaryClientInstructions" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryClientInstructions']} name="fiduciaryClientInstructions" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>

                            <hr/>
                            <div className="row g-3 align-items-center">
                                <div className="col-4">
                                  <label htmlFor="fiduciaryConsequencesExplained" className="col-form-label">Has the consequences of not having a will being explained and discussed? </label>
                                </div>
                                <div className="col-6">
                                  <input spellCheck="true" id="fiduciaryConsequencesExplained" onChange={(e) => {onChange(e)}} value={FormData['fiduciaryConsequencesExplained']}  name="fiduciaryConsequencesExplained" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Update Data</button>

                        </div>
                      </div>
                  </div>
          </form>
      </>
  )
 }

export default  Fiduciary