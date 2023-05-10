import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword.js';
import PasswordReset from './components/PasswordReset.js';
import Home from './components/Home';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact'
import DashboardNav from './components/DashboardPersonal';
import DashboardCareer from './components/DashboardCareer';
import DashboardAddition from './components/DashboardAdditional';
import Profile from './components/Profile'
import Message from './components/Message.js'
import JobFeed from './components/JobFeed.js';
import AppliedJob from './components/AppliedJob';
import MoreDetail from './components/MoreDetail';
import CompanyDetails from './components/CompanyDetails';
import CompanyProfile from './components/CompanyProfile';
import JobPost from './components/JobPost';
import JobCreated from './components/JobCreated';
import ProfileDashboard from './components/ProfileDashboard';
import ViewApplies from './components/ViewApplies';
import CompanyDashboard from './components/CompanyDashboard';
import ActiveJobs from './components/ActiveJobs';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/forgotpassword' element={< ForgotPassword />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/PasswordReset' element={<PasswordReset />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/OurTeam' element={<OurTeam />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Dashboard/Personal' element={<DashboardNav />}></Route>
        <Route path='/Dashboard/Career' element={<DashboardCareer />}></Route>
        <Route path='/Dashboard/Addition' element={<DashboardAddition />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Job' element={<JobFeed />}></Route>
        <Route path='Applied' element={<AppliedJob />}></Route>
        <Route path='Message' element={<Message />}></Route>
        <Route path="Job/Moredetail" element={<MoreDetail />}></Route>
        <Route path="/company" element={<CompanyDetails />}></Route>
        <Route path="/Company/profile" element={<CompanyProfile />}></Route>
        <Route path="/Job/Post" element={<JobPost />}></Route>
        <Route path="/Job/Created" element={<JobCreated />}></Route>
        <Route path="/Profile/Dashboard" element={<ProfileDashboard />}></Route>
        <Route path="/ViewApplies" element={<ViewApplies />}></Route>
        <Route path="/ActiveJob" element={<ActiveJobs />}></Route>
      </Routes>
    </div >
  );
}

export default App;
