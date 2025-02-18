import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to KalaMitra, your trusted platform for connecting skilled yet underprivileged ceramic artists with art enthusiasts and clients. At KalaMitra, we recognize the struggles local potters face in gaining visibility and sustaining their craft. Our mission is to empower these artisans by providing them with opportunities to showcase their talents and earn a livelihood.</p>
          <p>KalaMitra is committed to fostering creativity and cultural heritage. We continuously strive to enhance our platform, integrating the latest digital tools to provide a seamless experience for both potters and customers. Whether you're booking a pottery session, purchasing handcrafted ceramics, or supporting local artists, KalaMitra is here to make the process effortless and meaningful.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at KalaMitra is to bridge the gap between traditional pottery artisans and a global audience. We aim to create a thriving ecosystem where artists receive the recognition and support they deserve, ensuring the sustainability of this beautiful craft for future generations.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Authenticity:</b>
          <p>Connect directly with skilled local potters preserving traditional craftsmanship.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Seamless booking for pottery sessions at your preferred time and location.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Curated experiences tailored to your skill level and creative interests.</p>

        </div>
      </div>
    </div>
  )
}

export default About