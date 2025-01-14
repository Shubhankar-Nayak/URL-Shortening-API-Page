import React from 'react'

const Menu = () => {
  return (
  <div className='w-full absolute flex justify-center'>
    <div className='w-[90%] py-3 rounded-xl poppins-bold bg-DarkViolet text-white'>
      <div className='w-[90%] mx-auto py-8 flex flex-col items-center gap-5 border-b-[1px]'>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>
      <div className='w-[90%] mx-auto py-5 flex flex-col items-center gap-5'>
        <button className='w-full'>Login</button>
        <button className='w-full py-3 bg-Cyan rounded-full hover:bg-cyan-200 duration-300'>Sign Up</button>
      </div>
    </div>
  </div>
  )
}

export default Menu