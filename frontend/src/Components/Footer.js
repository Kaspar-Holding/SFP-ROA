import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <div class="container">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          {
              state['advisor'] ?
              state['advisor']['email'].includes('sfp') ? 
              <>
                <p class=" mb-0 text-muted">
                    Succession Financial Planning Advisory Services (Pty) Ltd. |
                    Registration Number: 2001/018056/07<br />
                    PO Box 207, Menlyn 0063 | T 012 471 4900 | E admin@succession.co.za
                    | www.sfpadvice.co.za<br />
                    Succession Financial Planning is a Licensed Financial Services
                    Provider FSP 41158, NCRCP13569
                  </p>
              </>
              : state['advisor']['email'].includes('fs4p') ? 
              <>
                <p class=" mb-0 text-muted">
                    Financial Solutions 4 Professionals Advisory Services (Pty) Ltd. |
                    Reg No 2011/009695/07, operating as a Jurastic Representative of <br />
                    Succession Financial Planning (SFP) License Number 41158.<br />
                    Directors: Mr N J Battersby (Chairman), Mr L du Plessis, Mr W Mouton, Mr M Mtshali, Mr I J Smit, Mr M Spies<br />
                    Company Secretary: Mr V E Barnard
                  </p>
              </>              
              : state['advisor']['email'].includes('sanlam') ? 
              <>
                <p class=" mb-0 text-muted">
                    Financial Solutions 4 Professionals Advisory Services (Pty) Ltd. |
                    Reg No 2011/009695/07, operating as a Jurastic Representative of 
                    Succession Financial Planning (SFP) License Number 41158.<br />
                    Directors: Mr N J Battersby (Chairman), Mr L du Plessis, Mr W Mouton, Mr M Mtshali, Mr I J Smit, Mr M Spies<br />
                    Company Secretary: Mr V E Barnard
                  </p>
              </>              : 
              <>
                <p class=" mb-0 text-muted">
                    Sanlam Life Insurance Limited Reg no 1998/021121/06<br />
                    Licensed Financial Services and Registered Credit Provider (NCRCP43)<br />
                    Refer to the Sanlam website for directors and company secretary details. www.sanlam.co.za
                  </p>
              </>
              : 
              <>
                  <p class=" mb-0 text-muted">
                    Succession Financial Planning Advisory Services (Pty) Ltd. |
                    Registration Number: 2001/018056/07<br />
                    PO Box 207, Menlyn 0063 | T 012 471 4900 | E admin@succession.co.za
                    | www.sfpadvice.co.za<br />
                    Succession Financial Planning is a Licensed Financial Services
                    Provider FSP 41158, NCRCP13569
                  </p>
              </>
          } 
        </footer>
      </div>
    </>
  )
}

export default Footer