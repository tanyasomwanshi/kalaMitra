import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Potters from './pages/Potters'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/potters' element={<Potters />}/>
        <Route path='/potters/:speciality' element={<Potters />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/potterId' element={<Appointment />} />
      </Routes>
     
    </div>
  )
}

export default App
