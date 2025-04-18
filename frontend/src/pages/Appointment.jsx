import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedPotters from '../Components/RelatedPotters'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {
  const { potterId } = useParams()
  const { potteryArtists, backendUrl, token, getPottersData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const navigate = useNavigate()
  const [potInfo, setPotInfo] = useState(null)
  const [potSlots, setPotSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const fetchPotInfo = async () => {
    const potInfo = potteryArtists.find(pot => pot._id === potterId)
    setPotInfo(potInfo)

  }

  const getAvailableSlots = async () => {
    // setPotSlots([])

    //getting current date
    let today = new Date()
    let newPotSlots = []   //a
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //setting end time of the date with index
      //let endTime = new Date()
      let endTime = new Date(currentDate) //a

      //endTime.setDate(today.getDate()+i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        // currentDate.setHours(currentDate.getHours() > 10? currentDate.getHours() + 1 : 10)
        currentDate.setHours(Math.max(currentDate.getHours(), 10))  //a
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        /* currentDate.setHours(10)
         currentDate.setMinutes(0) */
        currentDate.setHours(10, 0, 0, 0) //a
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString(/*[],{hour: '2-digit',minutes:'2-digit'}*/ 'en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })

        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = potInfo.slots_booked[slotDate] && potInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if (isSlotAvailable) {
          //add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })

        }





        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      // Remove duplicate times using a Map
      timeSlots = Array.from(new Map(timeSlots.map(item => [item.time, item])).values());


      //setPotSlots(prev => ([...prev,timeSlots]))
      newPotSlots.push(timeSlots.length > 0 ? timeSlots : [{ datetime: null, time: "No Slots" }]); //a

    }
    setPotSlots(newPotSlots); //a
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book session')
      return navigate('/login')
    }

    try {

      const date = potSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { potterId, slotDate, slotTime }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getPottersData()
        navigate('/my-appointments')

      } else {
        toast.error(data.message)
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)


    }
  }

  useEffect(() => {
    fetchPotInfo()

  }, [potteryArtists, potterId])

  /*useEffect(()=>{
    getAvailableSlots()
  },[potInfo]) */

  useEffect(() => {   //a
    if (potInfo) {
      getAvailableSlots();
    }
  }, [potInfo]);


  useEffect(() => {
    console.log(potSlots)

  }, [potSlots])

  return potInfo && (
    <div>
      {/*------Potter details-------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={potInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*---------Potter info: name, experience -------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {potInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{potInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{potInfo.experience}</button>
          </div>
          {/*-------Potter About ------- */}
          <div>
            <p className='flex items-center gap-1 txt-sm font-medium text-gray=900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{potInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Workshop fee: <span className='text-gray-600'>{potInfo.fees}</span>
          </p>
        </div>
      </div>
      {/*-------Booking Slots  ------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            potSlots.length > 0 && potSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item.length > 0 && item[0].datetime ? daysOfWeek[item[0].datetime.getDay()] : "N/A"}</p>
                <p>{item.length > 0 && item[0].datetime ? item[0].datetime.getDate() : "--"}</p>
              </div>
            ))
          }

        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {potSlots.length && potSlots[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}

            </p>

          ))}
        </div>
        <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book a session</button>

      </div>

      {/* Listing Related Potters */}
      <RelatedPotters potterId={potterId} speciality={potInfo.speciality} />
    </div>
  )
}

export default Appointment