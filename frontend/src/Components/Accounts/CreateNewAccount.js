import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
const CreateNewAccount = ({isAuthenticated, user}) => {
    
    const [SubmissionMessage, setSubmissionMessage] = useState("")
    const [SubmissionMessageVisibility, setSubmissionMessageVisibility] = useState("none")
    const [errorData, setErrorData] = useState({
        status: "",
        message: ""
    })
    const [SubmissionErrorVisibilty, setSubmissionErrorVisibilty] = useState("none")
    const [FormData, setFormData] = useState({
        email :  "",
        name : "",
        password : "",
        re_password : "",
        is_superuser : true,
        admin_id: user['id']
    })
    console.log(FormData)
    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value})
    const createUser = async() => {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                
            }
        }

        try {
            const Body = JSON.stringify(FormData)
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/users/`, Body ,config)
            if (response.status === 201){
                setSubmissionMessage("User Account Created Successfully")
                setFormData({
                    email :  "",
                    name : "",
                    password : "",
                    re_password : "",
                    is_superuser : true,
                    admin_id: user['id']
                })
            }
            setSubmissionMessageVisibility("block")
        } catch (error) {
            setErrorData({
                status: error.response.status,
                message: error.response.statusText
            })
            setSubmissionErrorVisibilty("block")
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        createUser()
    }
    if (!user['is_superuser']){
        return <Navigate to="/" />
    }
    // useEffect(() => {
    //     setFormData({
    //         email :  "",
    //         name : "",
    //         password : "",
    //         re_password : "",
    //         is_superuser : true,
    //         admin_id: user['id']
    //     })
    // }, []);
  return (
    <>
        <div className='container'>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Create New User</h1>
            </div>
            <div className="alert alert-danger" style={{display: SubmissionErrorVisibilty}} role="alert">
                {errorData.status} : {errorData.message}
            </div>
            <div className="alert alert-success" style={{display: SubmissionMessageVisibility}} role="alert">
                {SubmissionMessage}
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={e => onChange(e)} name='name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={e => onChange(e)} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={e => onChange(e)} name="password" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={e => onChange(e)} name="re_password" id="exampleInputPassword2" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Role" className="form-label">Role</label>
                    <select className="form-select" onChange={e => onChange(e)} value={FormData['is_superuser']} name="is_superuser" aria-label="Default select example">
                        <option value="true">Admin</option>
                        <option value="false">Agent</option>
                    </select>
                </div>
                
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}


const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps)(CreateNewAccount)