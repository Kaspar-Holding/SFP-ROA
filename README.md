# Succession Finance Planning Full Stack Application

This project is built on the following Stack

- REACT JS
- Django REST Framework 
- PostgreSQL (User)

# Deployment

Deployed using Nginx and Gunicorn



## Updates

### 28 September 2023:
- The ROA type should include radio buttons to indicate different types of ROA’s we use (SanFin ROA, SFP ROA, Glacier Ice), also type of replacement should include radio buttons to indicate whether its (“Rule 19”, “Non-Rule 19”). Updated and Deployed
- The reject (Not approved) button does not appear - Debugged and Deployed
- ROA Type and Replacement Type were removed from scoring system.
- ARCs can create the form again.
- Deployment on Production / Staging 

### 27 September 2023:
- Updated Superuser view user experience. Can only edit now.
- Type of Replacement is only applicable if Replacement is selected in Gatekeeping - Debugged and Deployed
- 2375: Make Radio Buttons a bit bold and closer - Updated and Deployed
- 2362: Not Approved Form should remain Editable - Debugged and Deployed
- 2361: Purposeless button - Not a bug.
- Added redirect for Advisors.
- Super users/Admin should be able to see all compliance documents in their login. currently they are only able to see referred cases - Debugged and Deployed
- Deployment

### 26 September 2023:
- 2358: Log Out Button in Left Panel is not operational - Debugged and Deployed
- Tested UX for Superuser, ARC and GK and debugged all the picked up issues.
- Approved is not getting selected for "client needs" question in ARC portion, rest all radio buttons are fine and getting selected - Debugged and Deployed
- Change Approve to "Approved", "Not Approve to "Not Approved" and "Partially Approve" to "Partially Approved" in ARC - Updated and Deployed
- All ARC questions are reset to "Not Approved" state if I go back from Summary screen using "Back to ARC questions" however ARC score remains intact. - Debugged and Deployed
- Deployment

### 25 September 2023:
- 2372: No Document is visible for ARC - Debugged and Deployed
- 2373: Abbreviations to be used in Business Unit Name in Initial Information - Updated and Deployed
- 2374: Date & Time Format to be changed in Summary View - Updated and Deployed
- Deployment

### 15 September 2023:
- 2349: Search Button for searching policy Number is not working - Developed
- Deployment

### 14 September 2023:
- 2349: Search Button for searching policy Number is not working - Developed
- Deployment

### 13 September 2023:
- 2355: GK Questions not as per Business Type - Resolved
- 2354: An Error has occurred - resolved
- 2353: 404 Page Error - resolved
- 2351: Gatekeeping Check List does not change - resolved
- 2350: Review Number appearing wrong - resolved
- 2349: Search Button for searching policy Number is not working - Not a bug, has yet to develop it
- 2348: Log out button - resolved
- Sign In, Forgot Password, Reset Password Pages Completed
- Deployment

### 11 September 2023:
- 2347: Basic Working on Compliance Review Management is completed
- Sign In, Forgot Password, Reset Password Pages Completed
- Deployment

### 25 August 2023:
- 2347: Working on Web ROA frontend implementation completed
- 2347: Working on Complaince frontend implementation in underway
- Sign In, Forgot Password, Reset Password Pages Completed
- Deployment

### 22 August 2023:
- 2347: Started Working on frontend implementation
- Sign In, Forgot Password, Reset Password Pages Completed
- Deployment

### 08 August 2023:
- 2345: 08 August 2023 Bugs:: Resolved
- Deployment

### 18 July 2023:
- 2343: 18 July 2023 Bugs:: Resolved
- Deployment

### 14 July 2023:
- Search Updated
- Automated Database dump
- Deployment

### 12 July 2023:
- Risk Factors Scores data completed
- Admin View updated as per latest updates
- Added Risk Factors Scores functionality in PDF
- Deployment

### 11 July 2023:
- Risk Factors Scores data redeveloped

### 27 June 2023:
- Updated the charfield with 20000 limit to limitless textfields

### 26 June 2023:
- Updated Logic for Short Term Personal and Commercial sections for PDF
- Fixed Short Term Sections mismatching bugs
- Fixed Short Term Commercial Serializer bug
- New Development Build
- New Production Build

### 22 June 2023:
- Adivsor Field is now flexible and added in PDF as well
- Section E of Investment Planning and BA Investment Bug is now resolved
- 3.99% + VAT was changed to 3.5% + VAT
- Helping material in Risk for Dread and Disability Cover had life instead of their respective name. It was updated as well.

### 09 June 2023:
- 2273: (Medical) Financial Advisor field is disabled is now in Ready for QA 
- 2274: (Medical) The medical form does not appear in the PDF form is now in Ready for QA 

### 08 June 2023:
- 2305: Bugs are now completed 

### 08 June 2023:
- 2179: is now completed 
- Following bugs are now resolved and assigned back to Maryum:
- 2162: (Risk Planning) Columns for Total need identified, Existing provisions, Shortfall/ Surplus and Cover taken up now are updated for Others without specifying Others
- 2163: (Risk Planning) In Section E Field for 1st year commission saves alphabetic input as well
- 2164: (Risk Planning) In Section E Field for On Going Fees saves alphabetic input as well
- 2165: (Risk Planning) In Section E Field for 2nd year commission saves alphabetic input as well
- 2166: (Risk Planning) In Section E Field for Life/Lives Covered saves alphabetic input as well
- 2167: (Risk Planning) In Section E Field for Escalation in Cover/Premium saves alphabetic input as well
- 2168: (Risk Planning) In Section E Field for Total fees and commission saves alphabetic input as well
- 2169: (Risk Planning) (Risk Planning) In "Benefit description: life cover, disability etc" Cover amount is being saved without description
- 2170: (Investment Planning) Field for Investment Term accepts the letter "e" as an input
- 2172: (Investment Planning) In Section E Fields for Initial commission and initial commission % take alphabetic input
- 2173: (Investment Planning) In Section E Fields for ongoing commission and ongoing commission % take alphabetic input
- 2174: (Investment Planning) In Section E Field for Life/Lives assured takes alphabetic input
- 2175: (Investment Planning) In Section E Field for Escalation takes alphabetic input
- 2176: (Investment Planning) In Section E Spelling of Frequency are incorrect
- 2177: (Investment Planning) In Funds Fact Sheet to client, % fields take alphabetic input

### 05 June 2023:
- 2180: Short Term Commercial Section Duplication is done

### 31 May 2023:
- Section 1 Bug is resolved

### 19 May 2023:
- Following were done in Task Number 2036:
- expand on accepted 
- additional comments in STIP, STIC
- duplication of type of loss in stip 
- increase space between policy number 
- remove branch name, tv, vcr, branch number 
- risk, motor and theft are not expanding
- commission in product comparison is adding up 
- remove R and text box from overnight parking in Vehicle in STIP and commission is acting up 
- risk section e is not showing up in Risk 
- change company to unwritten by in product comparison  
- Duplication for Loss Type in Short Term Insurance Commercial
- Deployed

### 18 May 2023:
- 2036: Almost everything is done except for one point
- Duplication for Loss Type in Short Term Insurance Personal

### 16 May 2023:
- 2037: Bugs reported in 09 May 2023 Meeting Resolved
- F4SP Footer updated
- Color selection in PDF updated
- Deployed

### 10 May 2023:
- 2005: Bugs reported in 09 May 2023 Meeting Resolved
- Deployed

### 09 May 2023:
- 2004: Printing Bugs resolved
- Deployed

### 05 May 2023:
- 1969: Risk Section E (Task) completed
- 1971: Investment Planning Section E (Task) completed
- 1972: BA Risk Section D (Task) completed
- 1973: BA Investment Section E (Task) completed
- 1983: Investment Tab PDF (Bug) resolved
- 1984: Risk Planning PDF  (Bug) resolved
- 1987: Short Term Commerical (Task) completed
- Deployed

### 04 May 2023:
- 1974: Search User Functionality Bug Resolved

### 03 May 2023:
- 1965: Record of Advice Bug resolved
- 1966: Risk Planning Bug resolved
- 1967: Bug resolved

### 20 April 2023:
- Working on Rebranding completed
- Replaced auto save with OnBlur Save
- Deployed new version

### 19 April 2023:
- Working on Rebranding started

### 18 April 2023:
- Auto saving
- Bugs Resolutions

### 14 April 2023:
- Bugs Resolutions

### 13 April 2023:
- Email Bugs fixing

### 13 April 2023:
- Deployment

### 11 April 2023:
- Working on Alert Email was completed

### 10 April 2023:
- Forgot Password is implemented
- Working on Alert Email

### 7 April 2023:
- Working on PDF Tool for duplication changes is done
- Working on TinyMCE in remaining components is done
- Deployment pending for 10 April 2023

### 6 April 2023:
- Working on PDF Tool for duplication changes 
- Working on TinyMCE in remaining components

### 5 April 2023:
- Duplication Task is now completed
- Working on TinyMCE in remaining components
- Working on PDF Tool for duplication changes 

### 4 April 2023:
- Linked Party Duplication in Investment and Risk Planning is done
- Duplication Task started on BA Risk Form
- Added TinyMCE editor in Record of Advice to handle complex text

### 3 April 2023:
- Linked Party Duplication in Dynamic Risk Assessment is done
- Duplication Task started on Completed Form

### 31 March 2023:
- Final Update of PDF is deployed
- Started working on Duplication Task

### 30 March 2023:
- PDF form is ready and deployed
- Gathered the new Bugs and Change Requests

### 29 March 2023:
- 50% of the STIP is now PDF ready
- Only Short Term Personal and Commerical are remaining
- Created 578 Accounts
- Delivered points 17, 18, 19 and 20

### 28 March 2023:
- 80% of the form is now PDF ready
- Only Short Term Personal and Commerical are remaining

### 24 March 2023:
- 60% of the form is now PDF ready
- Change Request 2 and 3 are done

### 26 January 2023:
- Fields removal of risk assessment module
- Tooltips added to form data
- Renamed Risk Factors to Dynamic Risk Assessment
### 29 December 2022:
Following Bugs are resolved:
- Bug Number 1206: Email Validation on Form Creation (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1206/) 
- Bug Number 1207: Phone field should be limited to numbers only (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1207/) 
- Bug Number 1217: In forms if radio button selected yes the field still remains editable (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1217/) 
- Bug Number 1218: In the form if a certain field is incorrectly filled it deosn't create the form but also doesn't specify why (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1218/) 
- Bug Number 1219: In the form, for FICA even if the yes radio button is selected, it still asks to fill the field for no (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1219/) 
- Bug Number 1220: Not editing the Record of Advice (https://dev.azure.com/KasparHoldingsKCS/Succession%20Finance%20Planning%20SFP/_workitems/edit/1220/) 

### 19 December 2022:
- Added Risk Factors 

### 18 November 2022:
- Added Update Password functionaility in Profile 
- Updated EMail template in Djoser
- Added Footer

### 11 November 2022:
- Added the form structures in Short Term Insurance Personal and Commerical 
- Updated the failed login function
- Added Short Term Insurance Personal & Commerical and Gap Cover in build
- Updated the backend and frontend on production server

### 10 November 2022:
- Created APIs for Short Term Insurance Personal and Commerical
- Created Serializers for Short Term Insurance Personal and Commerical
- Added API functions in Short Term Insurance Personal and Commerical modules

### 9 November 2022:
- Created APIs for Gap Cover and integrated those in Form Data
- Data is inserting and updating for Gap Cover
- Created 550+ fields model and APIs for Short Term Personal
- Working on Update Serializer for Short Term Personal

### 4 November 2022:
- Deployed backend server on Azure Server with Ngnix and Gunicorn while REACT JS on XAMPP
- Handed over Version 0.1 to SFP (Aakifah and Mohammad) for testing
- Completed the model, serializer and views for Gap Cover
- Created APIs for Gap Cover
- Completed the form for Gap Cover according to APIs
- Data is inserting and updating

### 3 November 2022:
- Deployed Version 1 on Azure Server with Ngnix and Gunicorn
- Added floating button on side for data save
- Added Update floating notification on data save
- Started work on model and serializer for Gap Cover

### 30 October 2022:
- Created all Serializers and Models of remaining tab (except Short Term)
- Created APIs for those tabs
- Updated those tabs by adding FormData collection and API calls
- Tested the form for updating
- Creation API is call on render to get the ID and data then user just updates the data

### 28 October 2022:
- Updated authentication modules.
- Created Models in backend
- Created new APIs for Fiduciary

### 20 September 2022:
- Added Header and Layout.
- Working on Login Page


### Until 20 September 2022:
- Form is recreated.
