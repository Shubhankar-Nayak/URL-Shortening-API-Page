import React from 'react'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'
import logow from '../assets/images/logo-white.svg'

const Footer = () => {
  return (
    <div className='w-full h-[780px] laptop:h-[320px] laptop:pt-[5rem] flex flex-col laptop:flex-row justify-center laptop:justify-around items-center laptop:items-start gap-10 bg-VeryDarkViolet text-white'>
        <div>
          <img src={logow} alt="Logo" /> 
         </div>
    
        <div className='text-center laptop:text-start'>
          <p className='text-[18px] mb-4 poppins-semibold'>Features</p>
            <div className='flex flex-col gap-2 poppins-light'>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>    
        </div>
    
        <div className='text-center laptop:text-start'>
            <p className='text-[18px] mb-4 poppins-semibold'>Resources</p>
            <div className='flex flex-col gap-2 poppins-light'>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
        </div>
    
        <div className='text-center laptop:text-start'>
            <p className='text-[18px] mb-4 poppins-semibold'>Company</p>
            <div className='flex flex-col gap-2 poppins-light'>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
        </div>
    
        <div className='flex gap-3 laptop:gap-6'>
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={pinterest} alt="Pinterest" />
            <img src={instagram} alt="Instagram" />
        </div>
    </div>
  )
}

export default Footer