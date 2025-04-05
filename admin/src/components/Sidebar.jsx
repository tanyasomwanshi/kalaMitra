import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
     const { aToken } = useContext(AdminContext)

     return (
          <div className='min-h-screen bg-white border-r border-gray-200 p-4'>
               {
                    aToken && <ul className="space-y-4 text-[#515151] mt-5">
                         <NavLink to={'/admin-dashboard'} className={({ isActive }) =>
                              `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-[4px] border-[#946539]' : ''
                              }`
                         }>
                              <img src={assets.home_icon} alt="" className="w-5 h-5" />
                              <p className="flex-1">Dashboard</p>
                         </NavLink>
                         <NavLink to={'/all-Sessions'} className={({ isActive }) =>
                              `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-[4px] border-[#946539]' : ''
                              }`
                         }>
                              <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
                              <p className="flex-1">Sessions</p>
                         </NavLink>
                         <NavLink to={'/all-potter'} className={({ isActive }) =>
                              `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-[4px] border-[#946539]' : ''
                              }`
                         }>
                              <img src={assets.add_icon} alt="" className="w-5 h-5" />
                              <p className="flex-1">Add Potter</p>
                         </NavLink>
                         <NavLink to={'/potter-list'} className={({ isActive }) =>
                              `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-[4px] border-[#946539]' : ''
                              }`
                         }>
                              <img src={assets.people_icon} alt="" className="w-5 h-5" />
                              <p className="flex-1">Potters List</p>
                         </NavLink>
                    </ul>
               }

          </div>
     )
}

export default Sidebar