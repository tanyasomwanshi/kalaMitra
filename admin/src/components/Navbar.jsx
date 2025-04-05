import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext)

    const navigate=useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    } 
 

  return (
    <div className='flex justify-between items-center px-6 sm:px-10 py-4 border-b border-gray-200 bg-white shadow-sm'>
        <div className='flex items-center gap-3 '>
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo2} alt="" />
            <p className='border px-3 py-1 rounded-full border-gray-400 text-gray-600 text-sm'>{aToken ? 'Admin': 'Potter'}</p>
        </div>
        <button onClick={logout} className='bg-[#946539] text-white text-sm px-6 py-2 rounded-full shadow-md hover:bg-[#7a5030] transition'>Logout</button>
    </div>
  )
}

export default Navbar