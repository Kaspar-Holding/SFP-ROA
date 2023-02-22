import React, { useState } from 'react'
import axios from 'axios'
const ImportExport = ({}) => {
  const [SuccessMessage, setSuccessMessage] = useState("")
  const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState("none")
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
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/importCSV/`,Body,config)
        setSuccessMessage("Successfully Updated")
        setSuccessMessageVisibility("block");
        setTimeout(() => {
            setSuccessMessageVisibility("none")
        }, 5000)
    } catch (error) {
      console.log('first', error.response)
    }
  }
  const onDowloadCSV = (e) => {
    e.preventDefault()
    ExportCSVFile()
  }
  const onUpload = (e) => {
    e.preventDefault()
    uploadCSVFile()
  }
  const [csvFile, setcsvFile] = useState({
    exportCSV : null
  })

  console.log(JSON.stringify(csvFile))
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
      <button className='btn btn-md btn-primary' onClick={(e)=>{onDowloadCSV(e)}}>Please download the sample CSV file from here</button>

      <div className="alert alert-success text-center" style={{display: SuccessMessageVisibility}} role="alert">
          <p><b>{SuccessMessage} </b></p>
      </div>
      <div className="mb-4">
          <div className="">
              <div className="">
                  <form class="" onSubmit={(e)=>{onUpload(e)}}>
                      <div class="col mb-3">
                          <label htmlFor="importCsv" class="form-label">Import Data</label>
                          <input type="file" required id="importCsv" accept='.csv' class="form-control" name="exportCSV" multiple={false} onChange={(e)=>(convertToBase64(e))} placeholder="Cost .csv file" />
                      </div>
                      <button type='submit' className="btn btn-md btn-primary col-12">Upload</button>

                  </form>
              </div>

          </div>

      </div>
    </>
  )
}
export default ImportExport
