import DashboardLayout from '@/hocs/DashboardLayout'
import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CreateDocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'


const EditQuestion = () => {
    
    const user = useSelector(state=>state.auth.user)

    const router = useRouter()

    const qId = router.query?.qId
    
    const [QuestionData, setQuestionData] = useState({
        question : ""
    })
    const [CategoryData, setCategoryData] = useState([])
    


    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }

    const onChange = (e) => {
        setQuestionData({
            ...QuestionData,
            [e.target.name] : e.target.value
        })
    }

    const updateQuestionBTN = (e) => {
        e.preventDefault()
        updateQuestion(QuestionData?.id)
    }

    
    const onSelectChange = (e) => {
        setQuestionData({
            ...QuestionData,
            [e.name] : e.id
        })
    }
    
    const updateQuestion = async() => {
        const Body = JSON.stringify(QuestionData)

        try {
            const response = await axios.post(
                `/api/compliance/questions/update`,
                Body,
                config
            )


            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${response?.data?.success}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

            router.push(`/apps/compliance/questions`)

        } catch (error) {
            console.log(error?.response?.data)
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }
    
    const getQuestion = async() => {

        const Body = JSON.stringify({
            id: qId
        })

        try {
            const response = await axios.post(
                `/api/compliance/questions/get/`,
                Body,
                config
            )
            setQuestionData(response?.data?.data)
            getCategories()
            // console.log(response?.data)
            
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }
    
    const getCategories = async() => {

        try {
            const response = await axios.get(
                `/api/compliance/questions/category/list`,
                config
            )
            setCategoryData(response?.data?.data?.select_data)
            // console.log(response?.data)
            
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }
    

    useEffect(() => {
        if (user?.is_superuser) {
            getQuestion()
        } else{
            router.push('/apps/compliance')
        }
    }, [])
   
    

    return (
        <Layout
            title={"ARC Questions"}
            content={"ARC Questions"}
        >
            <DashboardLayout
                appTitle={'Compliance'}
                app={'compliance'}
                dId={undefined}
            >
                <div className='col-lg-9'>
                    <div className='compliance-inital-card'>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 start-50 translate-middle'>
                                <p className='compliance-inital-card-header'>ARC Questions</p>
                            </div>
                        </div>
                        <div className='compliance-inital-content'>
                            <button type="button" onClick={()=>{router.push('/apps/compliance/questions')}} className="btn btn-sfp">Go Back</button>
                            <hr/>
                            
                            <form onSubmit={(e)=>{updateQuestionBTN(e)}}>
                                <div className='row'>
                                    <div className='col-lg-2'>   
                                    </div>                     
                                    <div className='col-lg-8 col-md-6 col-sm-12'>                        
                                        <div className="mb-3">
                                            <label for="basic-url" className="form-label compliance-inital-card-text">Question?</label>
                                            <input required onChange={(e)=>{onChange(e)}} type="text" value={QuestionData?.question} name="question" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="basic-url" className="form-label compliance-inital-card-text">Score?</label>
                                            <input required onChange={(e)=>{onChange(e)}} type="text" value={QuestionData?.max_score} name="max_score" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="basic-url" className="form-label compliance-inital-card-text">Category</label>
                                            <Select options={CategoryData} onChange={(e)=>{onSelectChange(e)}} defaultValue={QuestionData?.category} className="searchSelect" placeholder="Search the Category"/>
                                        </div>
                                    </div>      
                                    <div className='col-lg-2'>   
                                    </div>         
                                </div>
                                <div className="d-grid col-4 mx-auto">
                                    <button className="btn btn-primary compliance-inital-card-button-text btn-sfp" type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </DashboardLayout>
        </Layout>
    )
}

export default EditQuestion