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

const App = () => {

  const {aToken} = useContext(AdminContext)


  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-Sessions' element={<AllSessions />} />
          <Route path='/all-potter' element={<AddPotter/>}/>
          <Route path='/potter-list' element={<PottersList/>}/>
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