import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const PotterContext = createContext()
const PotterContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [pToken, setPToken] = useState(localStorage.getItem('pToken')?localStorage.getItem('pToken'):'')
    const [appointments,setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)
    const [profileData, setProfileData] = useState(false)

    const getAppointments = async () => {
        try {
            const {data} = await axios.get(backendUrl+ '/api/potter/appointments',{headers:{pToken}}) 
            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments)
            }else{
                toast.error(data.message)

            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/potter/complete-appointment',{appointmentId},{headers:{pToken}})
            if (data.success) {
               toast.success(data.message)
               getAppointments()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/potter/cancel-appointment',{appointmentId},{headers:{pToken}})
            if (data.success) {
               toast.success(data.message)
               getAppointments()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const getDashData = async () =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/potter/dashboard',{headers:{pToken}})

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getProfileData =async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/potter/profile', {headers:{pToken}})
            if (data.success) {
                setProfileData(data.profileData)
                console.log(data.profileData)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }


    const value ={
        pToken,setPToken,
        backendUrl,
        appointments,setAppointments,
        getAppointments,
        completeAppointment,
        cancelAppointment,
        dashData,setDashData,getDashData,
        profileData,setProfileData,
        getProfileData,


    }

    return(
        <PotterContext.Provider value={value}>
            {props.children}
        </PotterContext.Provider>
    )
}
export default PotterContextProvider