# Succession Finance Planning Full Stack Application

This project is built on the following Stack

- REACT JS
- Django REST Framework 
- PostgreSQL (User)

## Updates

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
