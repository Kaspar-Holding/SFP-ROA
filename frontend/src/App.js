import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Content } from './Components/Content'
// import { About } from './Components/About'
// import { Layout } from './Components/Layout'
import CreateForm from './Components/updatedComponents/Forms/CreateForm'
import ViewDRAForm from './Components/Forms/AttentionForm/ViewDRAForm'
import Apps from './Components/Apps'
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom"
import Layout from './Layout/Layout'
import CompleteForm from './Components/updatedComponents/Forms/CompleteForm'
import CompleteViewForm from './Components/Forms/AdminView/CompleteForm'
import Dashboard from './Components/Dashboard/Dashboard'
import WebROA from './Components/updatedComponents/WebROA'
import Compliance from './Components/updatedComponents/Compliance'
import Users from './Components/updatedComponents/Users'
import SignIn from './Components/Authentication/SignIn'
import AuthenticatedLayout from './Layout/AuthenticatedLayout'
import FormLayout from './Layout/FormLayout'
import LayoutUpdated from './Layout/LayoutUpdated'
import AccountDashboard from './Components/Accounts/AccountDashboard'
import CreateNewAccount from './Components/Accounts/CreateNewAccount'
import AccountDetails from './Components/Accounts/AccountDetails'
import Home from './Components/Home'
// import { RemainingForm } from './Components/RemainingForm'
// import { Profile } from './Components/Profile'
// import { NotFound } from './Components/NotFound'
// import { SignIn } from './Components/Authentication/SignIn'
// import { PageLayout } from './Components/PageLayout'
// import { UserManagement } from './Components/UserManagement'
import {Provider} from 'react-redux'
import store from './Store'
import UserProfile from './Components/Authentication/UserProfile'
import Form from './Components/Forms/Form'
import Fiduciary from './Components/Forms/Fiduciary'
import PrintForm from './Components/Forms/PrintForm'
import ImportExport from './Components/Import/ImportExport'
import AppPrint from './Components/Forms/AppPrint'
import PrintFormClient from './Components/Forms/PrintFormClient'
import PrintFormLayout from './Layout/CompleteFormLayout'
import Page404 from './Components/404/404'
import PrintStuff from './Components/PrintStuff'
import ServerDown from './Components/ServerDown'
import SuperUserLayout from './Layout/SuperUserLayout'
import NoHead from './Layout/NoHead'
import UpdatePassword from './Components/Accounts/UpdatePassword'
import ForgetPassword from './Components/Authentication/ForgetPassword'
import ResetPasswordConfirm from './Components/Authentication/ResetPasswordConfirm'
import ComplianceFormLayout from './Layout/ComplianceFormLayout'
import CreateNewComplianceDocument from './Components/updatedComponents/Compliance/Forms/CreateNewComplianceDocument'


function App() {
  return (
    <>
      <Provider store={store}> 
          <Router>
          {/* <Router basename={process.env.PUBLIC_URL}> */}
          
              <Layout>
                <Routes>
                  <Route element={<AuthenticatedLayout /> }>
                    <Route exact path="/" element={<Apps name="" /> } />
                    <Route exact path="/web-roa" element={<WebROA name="" /> } />
                    <Route exact path="/compliance" element={<Compliance name="" /> } />
                    <Route element={<FormLayout /> }>
                      <Route exact path="/createform" element={<CreateForm name="Create Form" /> } />
                      <Route exact path="/completeform" element={<CompleteForm name="Complete Form" /> } />
                    </Route>
                    <Route element={<ComplianceFormLayout /> }>
                      <Route exact path="/create-compliance-document" element={<CreateNewComplianceDocument name="Create Form" /> } />
                      <Route exact path="/complete-compliance-document" element={<CompleteForm name="Complete Form" /> } />
                    </Route>
                    <Route exact path="/importexport" element={<ImportExport name="" /> } />
                    <Route exact path="/form" element={<Form name="" /> } />
                    <Route element={<SuperUserLayout /> }>
                      {/* <Route exact path="/printform" element={<PrintForm name="" /> } /> */}
                      <Route exact path="/users" element={<Users name="" /> } />
                      <Route exact path="/newuser" element={<CreateNewAccount name="" /> } />
                      <Route exact path="/userdetails" element={<AccountDetails name="" /> } />
                      <Route exact path="/alertForm" element={<ViewDRAForm /> } />
                      <Route exact path="/viewForm" element={<CompleteViewForm /> } />
                    </Route>
                    <Route exact path="/profile" element={<UserProfile name="" /> } />
                    <Route exact path="/print" element={<PrintStuff name="" /> } />
                    <Route exact path="/updatePassword" element={<UpdatePassword /> } siteName={"SignIn"} />
                    {/* <Route exact path="/printform" element={<PrintForm name="" /> } /> */}
                  </Route>
                  <Route  element={<NoHead /> }>
                    <Route exact path="/updateFirstPassword" element={<UpdatePassword /> } siteName={"SignIn"} />
                    <Route exact path="/printform" element={<PrintForm name="" /> } />
                    <Route exact path="/printformclient" element={<PrintFormClient name="" /> } />
                  </Route>
                  <Route element={<LayoutUpdated /> }>
                    <Route exact path="/home" element={<Home /> } siteName={"Home"} />
                    <Route exact path="/reset-password-confirm" element={<ResetPasswordConfirm /> } siteName={"Home"} />
                    <Route exact path="/reset-password" element={<ForgetPassword /> } siteName={"Home"} />
                    <Route exact path="/server_down" element={<ServerDown /> } siteName={"Server Down"} />
                    <Route exact path="/signin" element={<SignIn /> } siteName={"SignIn"} />
                    <Route exact path="*" element={<Page404 /> } />
                  </Route>
                  <Route path="*" element={<Page404 /> } />
                </Routes>
              </Layout>
          </Router>
      </Provider>
    </>
  )
}

export default App
