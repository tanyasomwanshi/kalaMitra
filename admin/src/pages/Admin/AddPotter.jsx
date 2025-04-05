import React, { useState } from 'react'
import { assets } from '../../assets/assets'
const AddPotter = () => {
 
  const[potImg,setPotImg] = useState(false)
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[experience,setExperience] = useState('1 Year')
  const[fees,setFees] = useState('')
  const[about,setAbout] = useState('')
  const[Speciality,setSpeciality] = useState('Wheel Pottery')
  const[address1,setAddress1] = useState('')
  const[address2,setAddress2] = useState('')

  return (
    <form className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Potter</p>
      <div className='bg-white px-8 py-8 shadow-sm ring-1 ring-gray-200 w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="pot-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={potImg ? URL.createObjectURL(potImg) :  assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setPotImg(e.target.files[0])} type="file" id="pot-img" hidden />
          <p>Upload potter <br /> picture</p>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Potter name</p>
              <input  className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 ' type="text" placeholder='Name' required />
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Potter Email</p>
              <input className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' type="email" placeholder='Email' required />
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Potter Password</p>
              <input className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' type="password" placeholder='Password' required />
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' name='' id=''>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="11 Year">11 Year</option>
                <option value="12 Year">12 Year</option>
                <option value="13 Year">13 Year</option>
                <option value="14 Year">14 Year</option>
                <option value="15 Year">15 Year</option>
                <option value="16 Year">16 Year</option>
                <option value="17 Year">17 Year</option>
                <option value="18 Year">18 Year</option>
                <option value="19 Year">19 Year</option>
                <option value="20 Year">20 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' type="number" placeholder='fees' required />
            </div>
          </div>
          <div className='w-full lg:flex-1 flex flex-col gap-4' >
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' name="" id="">
                <option value="Wheel Pottery">Wheel Pottery</option>
                <option value="Clay Sculpting">Clay Sculpting</option>
                <option value="Traditional Terracotta Art">Traditional Terracotta Art</option>
                <option value="Glazed Pottery">Glazed Pottery</option>
                <option value="Functional Pottery">Functional Pottery</option>
                <option value="Decorative Ceramics">Decorative Ceramics</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' type="text" placeholder='address 1' required />
              <input className='bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200' type="text" placeholder='address 2' required />
            </div>
          </div>
        </div>
        <div>
          <p className='mt-4 mb-2'>About Potter</p>
          <textarea className='bg-white w-full px-4 pt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200' placeholder='write about Potter' rows={5} required />
        </div>

        <button className='bg-[#946539] px-10 py-3 mt-4 text-white rounded-full'>Add Potter</button>
      </div>
    </form>
  )
}

export default AddPotter