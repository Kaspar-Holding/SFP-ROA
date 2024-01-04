
import AppLayout from '../../../hocs/AppLayout'
import Layout from '../../../hocs/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'

const ExternalApps = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const user = useSelector(state=>state.auth.user)
    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )
    
    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )
            }, 6000
        )
		return () => {
			clearInterval(interval);
		}
    }, [])
       

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    return (
        
        <Layout
        title={"External Apps"}
        content={"External Apps"}
    >
        <AppLayout>
            <div className='apps'>
                <div className='container'>

                    <div className='position-relative'>
                        <div className="position-absolute top-0 end-0 dateTime">
                            {CurrentDate}
                        </div>
                    </div>
                    <br/>
                    <h5 className="card-title text-center updated-header">Welcome {user ? user.first_name : "User"}</h5>
                    <p className="card-text updated-subtitle">External App Links.</p>
                    <br/>
                    <div class="container text-center">
                        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                            <div class="col">
                                <a href="https://forms.office.com/r/n8cTPGJzhu" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://www.shutterstock.com/image-photo/writing-text-query-on-white-260nw-1941203896.jpg" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">Felicity</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://business.d6.co.za/nc/messages" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://play-lh.googleusercontent.com/uA2zaEZGZIkQ3rQCt3QYcHFiiWYGzaaoQAsUJjemBktv__U-K89d9fQkvek1s4OYjPQ" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">D6 Web app</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://forms.office.com/r/k2ch7r0ZnW" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://www.businesscoaching.co.uk/images/5-ways-to-offer-career-development-that-employees-value---story-vjx6f6.jpg" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">Digitalized supervision quiz</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://sanport.sanlam.co.za/sanfin/dashboard/mainhtml" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://sanport.sanlam.co.za/sanpublic/Login/images/whatsapp_sanlam_logo.png" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">SanFin</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                            <div class="col">
                                <a href="https://ess.sagesouthafrica.co.za/" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://www.accountingweb.co.uk/sites/default/files/styles/inline_banner/public/sage_logo_jpg.jpg?itok=B4R849iB" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">SAGE payslips</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://sanport.sanlam.co.za/sfpelearning/mod/folder/view.php?id=1250&forceview=1" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Illustration/payroll-system-header-image-us-en.png" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">SFP payrun dates</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://sanport.sanlam.co.za/sfpelearning/pluginfile.php/2686/mod_resource/content/0/MARKETING%20TOOLKIT%202022.pdf" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://sanport.sanlam.co.za/sfpelearning/pluginfile.php/3368/mod_resource/content/3/marketing%20toolkit.png" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">Marketing toolkit</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://auth.comotion.us/auth/realms/seedanalytics/protocol/openid-connect/auth?client_id=seedanalytics_client&redirect_uri=https%3A%2F%2Fseedanalytics.comodash.io%2Foauth2%2Fidpresponse&response_type=code&scope=openid&state=5C8qcvkaOP6vW5ynY4hOSlAkBv2TVjv2ImHEzzX%2Fy%2FIPChKuK%2Fa6VvzUUO1zxsHau66Qvik3iJjZFo1S%2BuhMMnLpVboZwPAvDRSWBPbSsRY8W4cmc0Mpf9UqrOshwAE3SpMH6d%2B9qqvO7QLUgMLm7HAhlauoqIhOY1I4wyvnL%2BbINdxTD4FAsaakAzSvlcGsJ0O2FaJIyV71NhAZ8nvukt91sQ5Il6%2BHvqtrbCj0W4HswZFOJsdNrQ%3D%3D" target='_blank' style={{textDecoration: "none"}}>
                                    <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
                                        <div className="card-body">
                                            <br/>
                                            <img width={"100px"} height={"100px"} src="https://bluechipdigital.co.za/wp-content/uploads/2022/09/Seed-Analytics-Logo-Colour_1-1024x392.png" alt="" className="card-img-top"/>
                                            <br/>
                                            <p className="card-text text-center">
                                                <a href="#" className="appLabel">Possibilities dashboard</a>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>

    </Layout>
    )
}

export default ExternalApps