import React, { useContext,useEffect,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import potteryArtists from '../assets/assets'



const Potters = () => {
  const { speciality }= useParams()
  const [filterPot,setFilterPot]=useState([])
  const [showFilter , setShowFilter] = useState(false)
  const navigate= useNavigate()
  const{potteryArtists}= useContext(AppContext)
  const applyFilter = () => {
    if(speciality){
      setFilterPot(potteryArtists.filter(pot => pot.speciality === speciality))
    }else{
      setFilterPot(potteryArtists)
    }
  }
  useEffect(()=>{
    applyFilter()

  },[potteryArtists,speciality])
  return (
    <div>
        <p className='text-gray-600'>Browse through the skilled ceramic artists</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button className={`py-1 px-3 borderrounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white': ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Wheel Pottery'? navigate('/potters'): navigate('/potters/Wheel Pottery')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Wheel Pottery" ?"bg-indigo-100 text-black" : ""}`}>Wheel Pottery</p>
          <p onClick={()=> speciality === 'Clay Sculpting'? navigate('/potters'): navigate('/potters/Clay Sculpting')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Clay Sculpting" ?"bg-indigo-100 text-black" : ""}`}>Clay Sculpting</p>
          <p onClick={()=> speciality === 'Traditional Terracotta Art'? navigate('/potters'): navigate('/potters/Traditional Terracotta Art')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Traditional Terracotta Art" ?"bg-indigo-100 text-black" : ""}`}>Traditional Terracotta Art</p>
          <p onClick={()=> speciality === 'Glazed Pottery'? navigate('/potters'): navigate('/potters/Glazed Pottery')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Glazed Pottery" ?"bg-indigo-100 text-black" : ""}`}>Glazed Pottery</p>
          <p onClick={()=> speciality === 'Functional Pottery'? navigate('/potters'): navigate('/potters/Functional Pottery')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Functional Pottery" ?"bg-indigo-100 text-black" : ""}`}>Functional Pottery</p>
          <p onClick={()=> speciality === 'Decorative Ceramics'? navigate('/potters'): navigate('/potters/Decorative Ceramics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Decorative Ceramics" ?"bg-indigo-100 text-black" : ""}`}>Decorative Ceramics</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterPot.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))

          }
          </div>
        </div>
    </div>
  )
}

export default Potters