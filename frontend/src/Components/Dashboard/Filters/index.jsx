import React, { useState } from 'react'

import Moment from 'moment'

const FilterComponent = (props) => {
    const storeId = props.storeId
    const PageSize = props.pageSize
    const [FilterVisibility, setFilterVisibility] = useState(true)
    const Date_Var = new Date()
    const yesterday = Moment(new Date(Date.now() - 86400000)).format('YYYY-MM-DD')
    const OnMonthChange = async (e) => {
        localStorage.setItem(`month-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateMonth(e.target.value) 
        props.monthStats(props.MonthYear+"-"+e.target.value, PageSize)   
    }
    const OnMonthYearChange = async (e) => {
        localStorage.setItem(`monthyear-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateMonthYear(e.target.value)
        props.monthStats(e.target.value+"-"+props.Month, PageSize)   
    }
    const OnDayChange = async (e) => {
        localStorage.setItem(`date-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateCurrentDate(e.target.value)
        props.dayStats(e.target.value, PageSize)
    }
    const onFromDateChange = async (e) => {
        localStorage.setItem(`fromdate-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateFromDate(e.target.value)
        props.customStats(e.target.value, props.ToDate, PageSize)
    }
    const onToDateChange = async (e) => {
        localStorage.setItem(`todate-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateToDate(e.target.value)
        props.customStats(props.FromDate,e.target.value, PageSize)
    }
    const OnYearChange = async (e) => {
        localStorage.setItem(`year-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.annualStats(e.target.value, PageSize)
        props.updateYear(e.target.value)
        // await delay(2000)
    }
    const ChangeFilter = async(e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.updateFilter(e.target.value)
        if (e.target.value == 5){
            props.dayStats(yesterday, PageSize)
            // LoadMonthlyProfile(Moment(yesterday).format('YYYY-MM'))
        }
        if (e.target.value == 1){
            props.annualStats(props.Year, PageSize)
        } else if (e.target.value == 2){
            
            props.monthStats(props.MonthYear+"-"+props.Month, PageSize)
        } else if (e.target.value == 3){
            props.dayStats(props.CurrentDate, PageSize)
        } else if (e.target.value == 4){
            props.customStats(props.FromDate, props.ToDate, PageSize)
        }
    }
    const onFilterChange = () => {setFilterVisibility(!FilterVisibility)}
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className="col-md-4  col-sm-6">
                            <select className="form-select" value={props.filterType} onChange={(e) => {ChangeFilter(e)}}  aria-label="Range">
                                <option value="0">Overall</option>
                                <option value="1">Year</option>
                                <option value="2">Month</option>
                                <option value="3">Day</option>
                                <option value="5">Yesterday</option>
                                <option value="4">Custom</option>
                            </select>
                        </div>
                        <div className="col-md-8  col-sm-12">
                            {
                                props.filterType == 1 ? 
                                    <>
                                    <div className='row'>
                                        <div className='col-lg-8 col-sm-12'></div>
                                        <div className="col-lg-4 col-sm-12 ">
                                            <select className="form-select" value={props.Year} onChange={(e) => {OnYearChange(e)}} aria-label="Range">
                                                <option selected>Year</option>
                                                {
                                                    props.years.map((year, index) => {
                                                        return <option key={`year${index}`} value={year}>{year}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    </>
                                : props.filterType == 2 ? 
                                    <>
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12'></div>
                                        <div className="col-md-4 col-sm-12 ">
                                        <select className="form-select" value={props.Month} onChange={(e) => {OnMonthChange(e)}}  aria-label="Range">
                                            <option value="01" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("01") > Number(Moment(new Date(Date.now())).format('MM'))}>January</option>
                                            <option value="02" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("02") > Number(Moment(new Date(Date.now())).format('MM'))}>February</option>
                                            <option value="03" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("03") > Number(Moment(new Date(Date.now())).format('MM'))}>March</option>
                                            <option value="04" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("04") > Number(Moment(new Date(Date.now())).format('MM'))}>April</option>
                                            <option value="05" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("05") > Number(Moment(new Date(Date.now())).format('MM'))}>May</option>
                                            <option value="06" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("06") > Number(Moment(new Date(Date.now())).format('MM'))}>June</option>
                                            <option value="07" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("07") > Number(Moment(new Date(Date.now())).format('MM'))}>July</option>
                                            <option value="08" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("08") > Number(Moment(new Date(Date.now())).format('MM'))}>August</option>
                                            <option value="09" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("09") > Number(Moment(new Date(Date.now())).format('MM'))}>September</option>
                                            <option value="10" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("10") > Number(Moment(new Date(Date.now())).format('MM'))}>October</option>
                                            <option value="11" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("11") > Number(Moment(new Date(Date.now())).format('MM'))}>November</option>
                                            <option value="12" disabled={props.MonthYear == Moment(new Date(Date.now())).format('YYYY') && Number("12") > Number(Moment(new Date(Date.now())).format('MM'))}>December</option>
                                        </select>
                                        </div>
                                        <div className="col-md-4 col-sm-12 ">
                                            <select className="form-select" value={props.MonthYear} onChange={(e) => {OnMonthYearChange(e)}} aria-label="Range">
                                                <option>Year</option>
                                                {
                                                props.years.map((year, index) => {
                                                    return <option key={`year${index}`} value={year}>{year}</option>
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    </> 
                                : props.filterType == 3 ? 
                                    <>  
                                        <div className='row'>
                                            
                                            <div className="col-md-6 col-sm-12"></div>
                                            <div className="col-md-6 col-sm-12">
                                                <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={props.CurrentDate} max={Date_Var.getFullYear()+"-"+ ("0" + (Date_Var.getMonth() + 1)).slice(-2)+"-"+("0" + Date_Var.getDate()).slice(-2)} onChange={(e) => {OnDayChange(e)}} id="html5-date-input" />
                                            </div>
                                        </div>
                                    </>
                                : props.filterType == 4 ? 
                                <>  
                                    <div className='row'>
                                        <div className='col-md-8 col-sm-12'></div>
                                        <div className="col-md-6 col-sm-12 ">
                                            <div className="col-md-10 col-sm-12">
                                                <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={props.FromDate} min="2021-09-01" onChange={(e) => {onFromDateChange(e)}} id="html5-date-input" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 ">
                                            <div className="col-md-10 col-sm-12">
                                                <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={props.ToDate} max={Date_Var.getFullYear()+"-"+ ("0" + (Date_Var.getMonth() + 1)).slice(-2)+"-"+("0" + Date_Var.getDate()).slice(-2)} onChange={(e) => {onToDateChange(e)}} id="html5-date-input" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <></>
                            }
                            
                        </div>

                    </div>
                </div>
            
            </div>
        </>
    )
}

export default FilterComponent