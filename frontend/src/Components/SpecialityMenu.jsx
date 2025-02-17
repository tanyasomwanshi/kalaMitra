import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality' >
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Connect with local artisans and immerse yourself in hands-on pottery experiences.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/potters/${item.speciality}`}>
                    <img src={item.image} alt="" className="w-24 h-24 object-cover rounded-full sm:w-24 mb-2"/>
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default SpecialityMenu