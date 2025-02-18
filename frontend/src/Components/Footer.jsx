import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                {/*-------left section------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>KalaMitra – Empowering ceramic artists, one creation at a time. 🌿✨Discover the beauty of handmade pottery and support talented artisans.Join us in preserving the craft through workshops and unique creations.Experience the joy of pottery with KalaMitra.© 2025 KalaMitra. All rights reserved.</p>
                </div>
                {/*-------center section------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/*-------right section------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>kalamitra@gmail.com</li>
                    </ul>

                </div>
            </div>
            {/*--------Copyright Text ------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2025 KalaMitra - All Right Reserved</p>
            </div>
             
        </div>
    )
}

export default Footer