import { useRouter } from 'next/router'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Layout from '../../../../hocs/Layout'
import Loader from '../../../../hocs/Loader'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import Moment from 'moment'
import dynamic from 'next/dynamic'
import Filters from './Filters'
import { API_URL } from '../../../../config'

const ExportData = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [FilterType, setFilterType] = useState(0)
    const [CustomFilterType, setCustomFilterType] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const Date_Var = new Date()
    const yesterday = Moment(new Date(Date.now() - 86400000)).format('YYYY-MM-DD')
    const currentYear = Date_Var.getFullYear()
    const [Month, setMonth] = useState(("0" + (Date_Var.getMonth() + 1)).slice(-2))
    const [Year, setYear] = useState(currentYear)
    const [MonthYear, setMonthYear] = useState(currentYear)
    const [CurrentDate, setCurrentDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const [FromDate, setFromDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const [ToDate, setToDate] = useState(Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2))
    const year = 2023
    const years = Array.from(new Array(currentYear - year + 1), (val, index) => index + year)
    const onDowloadCSV = async (e, filter_type, year, month_date, date, from_date, to_date) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        const Body = JSON.stringify({ filter_type, year, month_date, date, from_date, to_date })
        try {
            const response = await axios.post(
                '/api/compliance/export',
                Body,
                config
            )
            const url = `${API_URL}/${response?.data?.file}`
            window.open(url, '_blank').focus()
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `${error?.response?.data?.error?.message}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }

    }

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    return (
        <Layout
            title={ "Export - Advice Monitoring" }
            content={ "Export - Advice Monitoring" }
        >
            <DashboardLayout
                appTitle={ 'Export Advice Monitoring Data' }
                app={ 'compliance' }
            >
                <div className='col-lg-9'>
                    <div className='row'>
                        <div className='col-lg-12 roa-list-records text-center'>
                            <h1 className='app-dashboard-header'>Export Data</h1>
                            <hr />
                            <Filters
                                filterType={ FilterType }
                                updateFilter={ setFilterType }
                                Month={ Month }
                                updateMonth={ setMonth }
                                Year={ Year }
                                updateYear={ setYear }
                                MonthYear={ MonthYear }
                                updateMonthYear={ setMonthYear }
                                CurrentDate={ CurrentDate }
                                updateCurrentDate={ setCurrentDate }
                                FromDate={ FromDate }
                                updateFromDate={ setFromDate }
                                ToDate={ ToDate }
                                updateToDate={ setToDate }
                                years={ years }
                                loadData={ {} }
                                CustomFilterType={ CustomFilterType }
                                setCustomFilterType={ setCustomFilterType }
                            />
                            {
                                user?.is_superuser == 1 ?
                                    <>
                                        <button
                                            className={
                                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? "btn btn-primary sfp"
                                                    : user?.email?.includes('fs4p') ? "btn btn-primary fs4p"
                                                        : user?.email?.includes('sanlam') ? "btn btn-primary sanlam"
                                                            : "btn btn-primary "
                                            }
                                            style={ { marginRight: 50 } } onClick={ (e) => { onDowloadCSV(e, FilterType, Year, `${MonthYear}-${Month}`, CurrentDate, FromDate, ToDate) } }>Click here to Download the data export</button>
                                    </>
                                    : <>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default ExportData