

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
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/exportCSV/`,config)
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cost/importCSV/`,Body,config)
      setSuccessMessage("Successfully Updated")
      setSuccessMessageVisibility("block");
      setTimeout(() => {
          setSuccessMessageVisibility("none")
      }, 5000)
  } catch (error) {
    console.log('first', error.response)
  }
}
const onDowloadSampleFile = (e) => {
  e.preventDefault()
  ExportCSVFile()
}
const onUpload = (e) => {
  e.preventDefault()
  uploadCSVFile()
}