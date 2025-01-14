import React from 'react'
import { motion } from 'motion/react';
import branr from '../assets/images/icon-brand-recognition.svg'
import detair from '../assets/images/icon-detailed-records.svg'
import fulc from '../assets/images/icon-fully-customizable.svg'

const AdvancedStatistics = () => {
  return (
    <div className='w-full py-20 flex flex-col items-center bg-Gray'>
      <motion.h1 
        className='text-[30px] text-center text-VeryDarkBlue poppins-bold'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Advanced Statistics
      </motion.h1>
      <motion.p 
        className='w-[80%] laptop:w-[30%] mb-10 text-GrayishViolet text-center poppins-regular'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Track how your links are performing across the web with our advanced statistics dashboard.
      </motion.p>
        <div className='laptop:w-[75%] mt-10 flex flex-col laptop:flex-row items-center'>
          <motion.div 
            className='w-[90%] laptop:w-[75%] laptop:ps-8 pt-16 pb-5 relative bg-white flex flex-col items-center laptop:items-start rounded-lg'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0  }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className='p-4 absolute top-[-35px] bg-DarkViolet rounded-full'>
              <img src={branr} alt="Brand Recognition" />
            </div>
            <h1 className='text-[20px] text-center laptop:text-start text-VeryDarkBlue poppins-bold'>Brand Recognition</h1>
            <p className='w-[80%] py-5 text-GrayishViolet text-center laptop:text-start poppins-regular'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </motion.div>

          <motion.div 
            className='w-[7px] h-[80px] laptop:w-[60px] laptop:h-[7px] bg-Cyan'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0  }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.75 }}
          ></motion.div>

          <motion.div 
            className='w-[90%] laptop:w-[75%] laptop:mt-[4rem] laptop:ps-8 pt-16 pb-5 relative bg-white flex flex-col items-center laptop:items-start rounded-lg'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0  }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <div className='p-4 absolute top-[-35px] bg-DarkViolet rounded-full'>
              <img src={detair} alt="Brand Recognition" />
            </div>
            <h1 className='text-[20px] text-center laptop:text-start text-VeryDarkBlue poppins-bold'>Detailed Records</h1>
            <p className='w-[80%] py-5 text-GrayishViolet text-center laptop:text-start poppins-regular'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </motion.div>

          <motion.div 
            className='w-[7px] h-[80px] laptop:w-[60px] laptop:h-[7px] bg-Cyan'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0  }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.25 }}
          ></motion.div>

          <motion.div
            className='w-[90%] laptop:w-[75%] laptop:mt-[8rem] laptop:ps-8 pt-16 pb-5 relative bg-white flex flex-col items-center laptop:items-start rounded-lg'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0  }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <div className='p-4 absolute top-[-35px] bg-DarkViolet rounded-full'>
              <img src={fulc} alt="Brand Recognition" />
            </div>
            <h1 className='text-[20px] text-center laptop:text-start text-VeryDarkBlue poppins-bold'>Fully Customizable</h1>
            <p className='w-[80%] py-5 text-GrayishViolet text-center laptop:text-start poppins-regular'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </motion.div>
        </div>
      </div>
  )
}

export default AdvancedStatistics