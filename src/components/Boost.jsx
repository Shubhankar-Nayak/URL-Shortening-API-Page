import React from 'react'
import boostm from '../assets/images/bg-boost-mobile.svg'
import boostd from '../assets/images/bg-boost-desktop.svg'

const Boost = () => {
  return (
  <div className='w-full bg-DarkViolet text-white relative'>
    <div className='w-full h-full absolute flex flex-col justify-center items-center gap-3'>
      <h1 className='text-[25px] laptop:text-[35px] text-center poppins-bold'>Boost your links today</h1>
      <button className='px-10 py-3 text-[18px] poppins-semibold bg-Cyan hover:bg-cyan-200 duration-300 rounded-full'>Get Started</button>
    </div>
    <img className='w-full max-h-[40vh] laptop:hidden' src={boostm} alt="Boost" />
    <img className='w-full max-h-[40vh] hidden laptop:block' src={boostd} alt="Boost" />
  </div>
  )
}

export default Boost