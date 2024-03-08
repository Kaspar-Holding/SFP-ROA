// import { verifyUser, refreshUser } from '@/actions/auth'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ROASidebar from '../../components/ROASidebar'
import { useSelector } from 'react-redux'

const EditROALayout = ({ appTitle, app, formId, children }) => {
    const router = useRouter()

    const fId = router?.query?.slug || router?.query?.fId
    const user = useSelector(state => state.auth.user)
    return (
        <>
            <Navbar />
            <div className='dashboard'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <ROASidebar
                            appTitle={ appTitle }
                            app={ app }
                        />
                    </div>
                    <div className='col-lg-9'>
                        <div className='row d-flex align-items-center justify-content-center sfp-online-slider'>
                            <div className='row'>
                                {/* <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit` ? 
                                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                                        : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                            : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                                : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                                 : 
                                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                                        : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                            : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                                : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                                 }>Disclosures <br /> Document</button>
                                </div> */}
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/record", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/record` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Record of<br />Advice</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/riskplanning", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/riskplanning` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Risk<br />Planning</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/investplanning", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/investplanning` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Investment<br />Planning</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/barisk", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/barisk` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>BA<br />Risk</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/bainvest", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/bainvest` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>BA<br />Investment</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/employee", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/employee` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Employee<br />Benefits</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/fiduciary", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/fiduciary` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Fiduciary<br />Form</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/stcommercial", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/stcommercial` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Short Term<br />Commercial</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/stpersonal", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/stpersonal` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Short Term<br />Personal</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/medical", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/medical` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Medical<br />Cover</button>
                                </div>
                                <div className='col'>
                                    <button type="button" onClick={ (e) => { router.push({ pathname: "/apps/roa/documents/edit/gapcover", query: { fId: fId } }) } } className={ router.pathname === `/apps/roa/documents/edit/gapcover` ?
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100  btn-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100  btn-sanlam w-100'
                                                    : 'btn btn-sm btn-primary w-100  btn-sfp w-100'
                                        :
                                        user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                            : user?.email?.includes('fs4p') ? 'btn btn-sm btn-outline-primary btn-outline-fs4p w-100'
                                                : user?.email?.includes('sanlam') ? 'btn btn-sm btn-outline-primary btn-outline-sanlam w-100'
                                                    : 'btn btn-sm btn-outline-primary btn-outline-sfp w-100'
                                    }>Gap<br />Cover</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditROALayout