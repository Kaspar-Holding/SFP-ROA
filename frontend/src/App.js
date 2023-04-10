import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Content } from './Components/Content';
// import { About } from './Components/About';
// import { Layout } from './Components/Layout';
import CreateForm from './Components/Forms/CreateForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom"
import Layout from './Layout/Layout';
import CompleteForm from './Components/Forms/CompleteForm';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/Authentication/SignIn';
import SidebarLayout from './Layout/SidebarLayout';
import NonSidebarLayout from './Layout/NonSidebarLayout';
import AccountDashboard from './Components/Accounts/AccountDashboard';
import CreateNewAccount from './Components/Accounts/CreateNewAccount';
import AccountDetails from './Components/Accounts/AccountDetails';
import Home from './Components/Home';
// import { RemainingForm } from './Components/RemainingForm';
// import { Profile } from './Components/Profile';
// import { NotFound } from './Components/NotFound';
// import { SignIn } from './Components/Authentication/SignIn';
// import { PageLayout } from './Components/PageLayout';
// import { UserManagement } from './Components/UserManagement';
import {Provider} from 'react-redux'
import store from './Store'
import UserProfile from './Components/Authentication/UserProfile';
import Form from './Components/Forms/Form';
import Fiduciary from './Components/Forms/Fiduciary';
import PrintForm from './Components/Forms/PrintForm';
import ImportExport from './Components/Import/ImportExport';
import AppPrint from './Components/Forms/AppPrint';
import PrintFormClient from './Components/Forms/PrintFormClient';
import PrintFormLayout from './Layout/CompleteFormLayout';
import PrintStuff from './Components/PrintStuff';
import ServerDown from './Components/ServerDown';
import SuperUserLayout from './Layout/SuperUserLayout';
import NoHead from './Layout/NoHead';
import UpdatePassword from './Components/Accounts/UpdatePassword';
import ForgetPassword from './Components/Authentication/ForgetPassword'
import ResetPasswordConfirm from './Components/Authentication/ResetPasswordConfirm'



function App() {
  return (
    <>
      <Provider store={store}> 
          <Router>
          {/* <Router basename={process.env.PUBLIC_URL}> */}
          
              <Layout>
                <Routes>
                  <Route element={<SidebarLayout /> }>
                    <Route exact path="/" element={<Dashboard name="" /> } />
                    <Route exact path="/createform" element={<CreateForm name="" /> } />
                    <Route exact path="/importexport" element={<ImportExport name="" /> } />
                    <Route exact path="/completeform" element={<CompleteForm name="" /> } />
                    <Route exact path="/form" element={<Form name="" /> } />
                    <Route element={<SuperUserLayout /> }>
                      {/* <Route exact path="/printform" element={<PrintForm name="" /> } /> */}
                      <Route exact path="/users" element={<AccountDashboard name="" /> } />
                      <Route exact path="/newuser" element={<CreateNewAccount name="" /> } />
                      <Route exact path="/userdetails" element={<AccountDetails name="" /> } />
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
                  <Route element={<NonSidebarLayout /> }>
                    <Route exact path="/home" element={<Home /> } siteName={"Home"} />
                    <Route exact path="/reset-password-confirm" element={<ResetPasswordConfirm /> } siteName={"Home"} />
                    <Route exact path="/reset-password" element={<ForgetPassword /> } siteName={"Home"} />
                    <Route exact path="/server_down" element={<ServerDown /> } siteName={"Server Down"} />
                    <Route exact path="/signin" element={<SignIn /> } siteName={"SignIn"} />
                  </Route>
                </Routes>
              </Layout>
          </Router>
      </Provider>
    </>
  );
}

export default App;
