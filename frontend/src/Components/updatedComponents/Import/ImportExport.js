// import './Styles/CustomNotification.css';
// import  './Styles/CustomButton.css'
import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

const ImportExport = ({user}) => {
  const [SuccessMessage, setSuccessMessage] = useState("")
  const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
  const [ImportResult, setImportResult] = useState([])
  const ExportCSVFile = async() => {
    const config = {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `JWT ${localStorage.getItem('access')}`
      }
    }
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/excel/`,config)
      const url = `${process.env.REACT_APP_BACKEND_URL}/${response.data['file']}`
      window.open(url, '_blank').focus()
    } catch (error) {
      // console.log('first', error)
    }
  }
  const ExportCSVSampleFile = async() => {
    const config = {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `JWT ${localStorage.getItem('access')}`
      }
    }
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/sample/`,config)
      const url = `${process.env.REACT_APP_BACKEND_URL}/${response.data['file']}`
      window.open(url, '_blank').focus()
    } catch (error) {
      // console.log('first', error)
    }
  }
  const uploadCSVFile = async() => {
    const config = {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `JWT ${localStorage.getItem('access')}`
      }
    }
    const Body = JSON.stringify(csvFile)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/importCSV/`,Body,config)
        setSuccessMessage("Successfully Updated")
        setSuccessMessageVisibility("block")
        setImportResult(response.data['importResult'])
        const url = `${process.env.REACT_APP_BACKEND_URL}/${response.data['file']}`
        window.open(url, '_blank').focus()
        setTimeout(() => {
            setSuccessMessageVisibility("none")
        }, 5000)
      } catch (error) {
        console.log('first', error.response.data['Errors'])
      setImportResult({})
      setSuccessMessage(error.response.Errors)
      setSuccessMessageVisibility("block")
      setTimeout(() => {
        setSuccessMessageVisibility("none")
      }, 5000)
    }
  }
  console.log(ImportResult)
  const onDowloadCSV = (e) => {
    e.preventDefault()
    ExportCSVFile()
  }
  const onDowloadCSVSample = (e) => {
    e.preventDefault()
    ExportCSVSampleFile()
  }
  const onUpload = (e) => {
    e.preventDefault()
    uploadCSVFile()
  }
  const [csvFile, setcsvFile] = useState({
    exportCSV : null,
    advisorId: user.id
  })

  // console.log(JSON.stringify(csvFile))
  const convertToBase64 = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])    
    reader.onload = () => {
    //   console.log('called: ', reader)
    setcsvFile({...csvFile,[e.target.name]: reader.result})
    //   setCompanyProfile({...CompanyProfile,[e.target.name]: e.target.files[0]})
    }
  }
  return (
    <>
      <div className="notification_container">
        <div className={
              user['email'].includes('sfp') || user['email'].includes('succession')? "alert alert-sfp-success fade show" 
              : user['email'].includes('fs4p') ? "alert alert-fs4p-success fade show" 
              : user['email'].includes('sanlam') ? "alert alert-sanlam-success fade show" 
              : "alert alert-sfp-success fade show"
          } style={{display: SuccessMessageVisibility}} role="alert">
          {SuccessMessage}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Import Export Wizard</h1>
      </div>
      <button 
        className= { 
            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp" 
            : user['email'].includes('fs4p') ? "btn btn-primary fs4p" 
            : user['email'].includes('sanlam') ? "btn btn-primary sanlam" 
            : "btn btn-primary "
        } 
        style={{marginRight:50}} onClick={(e)=>{onDowloadCSV(e)}}>Please download the All Data CSV file from here</button>
      <button 
        className= { 
            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp" 
            : user['email'].includes('fs4p') ? "btn btn-primary fs4p" 
            : user['email'].includes('sanlam') ? "btn btn-primary sanlam" 
            : "btn btn-primary "
        } 
        style={{}} onClick={(e)=>{onDowloadCSVSample(e)}}>Please download the sample CSV file from here</button>
      <div className="alert alert-success text-center" style={{display: SuccessMessageVisibility}} role="alert">
          <p><b>{SuccessMessage} </b></p>
      </div>
      <div className="mb-4 mt-4">
          <div className="">
              <div className="">
                  <form className="" onSubmit={(e)=>{onUpload(e)}}>
                      <div className="col mb-3">
                          <label htmlFor="importCsv" className="form-label">Import Data</label>
                          <input type="file" required id="importCsv" accept='.csv' className="form-control" name="exportCSV" multiple={false} onChange={(e)=>(convertToBase64(e))} placeholder="Cost .csv file" />
                      </div>
                      <button 
                        type='submit' 
                        className= { 
                            user['email'].includes('sfp') || user['email'].includes('succession')? "btn btn-primary sfp col-12" 
                            : user['email'].includes('fs4p') ? "btn btn-primary fs4p col-12" 
                            : user['email'].includes('sanlam') ? "btn btn-primary sanlam col-12" 
                            : "btn btn-primary  col-12"
                        }
                      >
                        Upload
                      </button>

                  </form>
              </div>

          </div>
          {
            ImportResult ? 
            <>
              <hr />
              <label htmlFor="importCsv" className="h2">Import Result</label>
              <br/>
              <label htmlFor="importCsv" className="">Following Table show the results of CSV File and their risk weight</label>
              <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                          <tr>
                              <th>
                                Risk Weight
                              </th>
                              <th>
                                Count
                              </th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                              Object.keys(ImportResult).map((keyName, i) => (
                                <tr>
                                  <td>
                                    {keyName}
                                  </td>
                                  <td>
                                    {ImportResult[keyName]}
                                  </td>
                                </tr>
                              ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
            : <></>
          }

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect(mapStateToProps)(ImportExport)