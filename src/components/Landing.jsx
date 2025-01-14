import React from 'react'
import working from '../assets/images/illustration-working.svg'
import { motion } from 'motion/react';

const Landing = () => {
  return (
  <div className='w-full mb-[12vh] laptop:flex laptop:flex-row-reverse laptop:justify-center gap-10'>
    <img className='w-full laptop:w-[40%] px-5' src={working} alt="Working" />
    <div className='laptop:w-[30%] flex flex-col items-center laptop:items-start'>
      <h1 className='mt-10 mb-5 text-[40px] laptop:text-[50px] leading-[3rem] laptop:leading-[4rem] text-center laptop:text-start text-VeryDarkBlue poppins-bold'>More than just shorter links</h1>
      <p className='w-[90%] laptop:w-[80%] mb-8 text-GrayishViolet text-center laptop:text-start poppins-regular'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <motion.button 
        className='px-10 py-3 text-[18px] poppins-semibold bg-Cyan hover:bg-cyan-200 duration-300 text-white rounded-full'
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, -30, 30, -30, 30, 0],
        }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        Get Started
      </motion.button>
    </div>
  </div>
  )
}

export default Landing