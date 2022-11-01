import React, {useState} from 'react';
// import './Invest.css';
 function  Fiduciary()
 {
    return(
        <>
        <br/>
        <div className="text-start "style={{ color: "#14848A" ,fontSize:'30px',fontFamily:'Arial Bold',fontWeight:'bold'}} > <b>Fiduciary</b></div>
        <hr/>
            <form method="get">
                  <div style={{fontSize:'14px'}} align="left">
                      <div className="row">
                        <div className="col-12" style={{paddingBottom: "0.5%"}}>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Is there a valid Will in place?  </label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" checked/>Yes
                                    </label>
                                  </div>
                                  <div className="col-1">
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>No
                                    </label>
                                  </div>
                              </div>

                            <hr/>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Date last updated? </label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  type="date" id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>

                              <hr/>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Where is the will kept? </label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true" id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>

                              <hr/>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Details of Executor?</label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true" id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>

                              <hr/>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Client instruction in terms of drafting a Will? </label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true"  id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>

                              <hr/>
                              <div className="row g-3 align-items-center">
                                  <div className="col-4">
                                    <label htmlFor="address" className="col-form-label">Has the consequences of not having a will being explained and discussed? </label>
                                  </div>
                                  <div className="col-6">
                                    <input spellCheck="true" id="address" name="address" className="form-control" placeholder="Click to enter text"  aria-describedby="" />
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </form>
        </>
    )
 }

export default  Fiduciary