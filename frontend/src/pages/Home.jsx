import React from 'react'
import Header from '../Components/Header'
import SpecialityMenu from '../Components/SpecialityMenu'
import TopPotters from '../Components/TopPotters'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopPotters/>
        <Banner/>
       
    </div>
  )
}

export default Home