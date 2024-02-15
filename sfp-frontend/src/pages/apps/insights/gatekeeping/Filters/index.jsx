import React, { useState } from 'react'

import Moment from 'moment'

const Filters = (props) => {
    const storeId = props.storeId
    const [FilterVisibility, setFilterVisibility] = useState(true)
    const Date_Var = new Date()
    const Sortby = props.Sortby
    const SortDirection = props.SortDirection
    const yesterday = Moment(new Date(Date.now() - 86400000)).format('YYYY-MM-DD')
    const CustomFilterType = props.CustomFilterType
    const Regions = props.Regions
    const gatekeepers = props.gatekeepers

    const OnMonthChange = async (e) => {
        localStorage.setItem(`month-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateMonth(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, e.target.value, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
        // props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const OnMonthYearChange = async (e) => {
        localStorage.setItem(`monthyear-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateMonthYear(e.target.value)
        props.loadData(props.filterType, props.Year, e.target.value, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const OnDayChange = async (e) => {
        localStorage.setItem(`date-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateCurrentDate(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, e.target.value, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const onFromDateChange = async (e) => {
        localStorage.setItem(`fromdate-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateFromDate(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, e.target.value, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const onToDateChange = async (e) => {
        localStorage.setItem(`todate-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateToDate(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, e.target.value, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const OnYearChange = async (e) => {
        localStorage.setItem(`year-dashboard-${storeId}`, e.target.value)
        e.preventDefault()
        props.updateYear(e.target.value)
        props.loadData(props.filterType, e.target.value, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
        // await delay(2000)
    }
    const ChangeFilter = async (e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.updateFilter(e.target.value)
        // filterType, year, monthyear, month, date, customFilterType, fromdate, todate, region, advisor, businessType
        props.loadData(e.target.value, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    const onRegionUpdate = async (e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.loadAdvisors ? props.loadAdvisors(e.target.value) : null
        props.setSelectedRegions(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, e.target.value, props.SelectedGatekeepers, props.BusinessType)
    }
    const onAdvisorUpdate = async (e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.setSelectedGatekeepers(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, e.target.value, props.BusinessType)
    }
    const onBTUpdate = async (e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.setBusinessType(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, props.CustomFilterType, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, e.target.value)
    }
    const onCustomerFilterChange = async (e) => {
        localStorage.setItem(`filterType-dashboard-${storeId}`, e.target.value)
        props.setCustomFilterType(e.target.value)
        props.loadData(props.filterType, props.Year, props.MonthYear, props.Month, props.CurrentDate, e.target.value, props.FromDate, props.ToDate, props.SelectedRegions, props.SelectedGatekeepers, props.BusinessType)
    }
    return (
        <>
            <div className={
                props.filterType == 4 ?
                    'row my-1 '
                    :
                    'row my-1 row-cols-5'
            }>
                <div className={
                    props.filterType == 4 ?
                        'col-1'
                        :
                        'col'
                }>
                    <label className='filter-label'>Date Filter Type</label>
                    <select className="form-select" value={ props.filterType } onChange={ (e) => { ChangeFilter(e) } } aria-label="Range">
                        <option value="1">Year</option>
                        <option value="2">Month</option>
                        <option value="3">Day</option>
                        <option value="4">Custom</option>
                    </select>
                </div>
                <div className={
                    props.filterType == 4 ?
                        'col-5'
                        :
                        'col'
                }>
                    {
                        props.filterType == 1 ?
                            <>
                                <label className='filter-label'>Year</label>
                                <select className="form-select" value={ props.Year } onChange={ (e) => { OnYearChange(e) } } aria-label="Range">
                                    <option selected>Year</option>
                                    {
                                        props.years.map((year, index) => {
                                            return <option key={ `year${index}` } value={ year }>{ year }</option>
                                        })
                                    }
                                </select>
                            </>
                            : props.filterType == 2 ?
                                <>
                                    <div className='row row-cols-2'>
                                        <div className="col">
                                            <label className='filter-label'>Month</label>
                                            <select className="form-select" value={ props.Month } onChange={ (e) => { OnMonthChange(e) } } aria-label="Range">
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label className='filter-label'>Year</label>
                                            <select className="form-select" value={ props.MonthYear } onChange={ (e) => { OnMonthYearChange(e) } } aria-label="Range">
                                                <option>Year</option>
                                                {
                                                    props.years.map((year, index) => {
                                                        return <option key={ `year${index}` } value={ year }>{ year }</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </>
                                : props.filterType == 3 ?
                                    <>
                                        <label className='filter-label'>Date</label>
                                        <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={ props.CurrentDate } max={ Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2) } onChange={ (e) => { OnDayChange(e) } } id="html5-date-input" />
                                    </>
                                    : props.filterType == 4 ?
                                        <>
                                            <div className='row row-cols-3'>
                                                <div className='col'>
                                                    <label className='filter-label'>Trend Type</label>
                                                    <select className="form-select" value={ CustomFilterType } onChange={ (e) => { onCustomerFilterChange(e) } } aria-label="Range">
                                                        <option value="1">Daily (30 days max)</option>
                                                        <option value="2">Weekly</option>
                                                        <option value="3">Month</option>
                                                        <option value="4">Quarterly</option>
                                                        <option value="5">Annually</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label className='filter-label'>From Date</label>
                                                    <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={ props.FromDate } min="2021-09-01" onChange={ (e) => { onFromDateChange(e) } } id="html5-date-input" />
                                                </div>
                                                <div className="col">
                                                    <label className='filter-label'>To Date</label>
                                                    <input className="form-control" type="date" placeholder="dd-mm-yyyy" value={ props.ToDate } max={ Date_Var.getFullYear() + "-" + ("0" + (Date_Var.getMonth() + 1)).slice(-2) + "-" + ("0" + Date_Var.getDate()).slice(-2) } onChange={ (e) => { onToDateChange(e) } } id="html5-date-input" />
                                                </div>
                                            </div>
                                        </>
                                        : <></>
                    }

                </div>
                <div className={
                    props.filterType == 4 ?
                        'col-2'
                        :
                        'col'
                }>
                    <label className='filter-label'>Region</label>
                    <select className="form-select" value={ props.SelectedRegions } onChange={ (e) => { onRegionUpdate(e) } } aria-label="Regions">
                        <option value="all">All</option>
                        {
                            Regions?.map(
                                (row, key) => {
                                    return (
                                        <option key={ key } value={ row?.label }>{ row?.label }</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
                <div className={
                    props.filterType == 4 ?
                        'col-2'
                        :
                        'col'
                }>
                    <label className='filter-label'>Gatekeepers</label>
                    <select className="form-select" value={ props.SelectedGatekeepers } onChange={ (e) => { onAdvisorUpdate(e) } } aria-label="Advisors">
                        <option value={ "all" }>All</option>
                        {
                            gatekeepers?.map(
                                (row, key) => {
                                    return (
                                        <option key={ key } value={ row?.id }>{ row?.label }</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
                <div className={
                    props.filterType == 4 ?
                        'col-2'
                        :
                        'col'
                }>
                    <label className='filter-label'>Business Type</label>
                    <select className="form-select" value={ props.BusinessType } onChange={ (e) => { onBTUpdate(e) } } aria-label="Range">
                        <option value={ "all" }>All</option>
                        <option value="1">Business Assurance</option>
                        <option value="2">Comm release</option>
                        <option value="3">Employee Benefits</option>
                        <option value="4">Funeral</option>
                        <option value="5">GAP Cover</option>
                        <option value="6">Recurring - Investment</option>
                        <option value="7">Lumpsum - Investment</option>
                        <option value="8">Investment- Both</option>
                        <option value="9">Medical Aid</option>
                        <option value="10">Other</option>
                        <option value="11">Will</option>
                        <option value="12">Risk</option>
                        <option value="13">ST Re-issued/instated</option>
                        <option value="14">Short Term Commercial</option>
                        <option value="15">Short Term Personal</option>
                    </select>
                </div>

            </div>
        </>
    )
}

export default Filters