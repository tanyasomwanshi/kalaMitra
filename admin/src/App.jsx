import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllSessions from './pages/Admin/AllSessions';
import AddPotter from './pages/Admin/AddPotter';
import PottersList from './pages/Admin/PottersList';
import { PotterContext } from './context/PotterContext';
import PotterDashboard from './pages/Potter/PotterDashboard';
import PotterAppointments from './pages/Potter/PotterAppointments';
import PotterProfile from './pages/Potter/PotterProfile';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {pToken} = useContext(PotterContext)


  return aToken || pToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/*Admin Route*/}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-Sessions' element={<AllSessions />} />
          <Route path='/all-potter' element={<AddPotter/>}/>
          <Route path='/potter-list' element={<PottersList/>}/>

          {/*Potter Route*/}
          <Route path='/potter-dashboard' element={<PotterDashboard/>}/>
          <Route path='/potter-appointments' element={<PotterAppointments/>}/>
          <Route path='/potter-profile' element={<PotterProfile/>}/>
          </Routes>
      </div>

    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App