import React from 'react'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu-svgrepo-com.svg'

const Navbar = ({ togglemenu, setToggleMenu }) => {
  return (
    <div className='w-full h-[10vh] px-5 laptop:px-[10rem] flex justify-between items-center'>
        <div className='flex gap-8'>
          <img src={logo} alt="Logo" />
          <div className='text-GrayishViolet hidden laptop:flex items-center gap-5 poppins-semibold'>
            <a className='hover:text-VeryDarkViolet cursor-pointer duration-300' href="#">Features</a>
            <a className='hover:text-VeryDarkViolet cursor-pointer duration-300' href="#">Pricing</a>
            <a className='hover:text-VeryDarkViolet cursor-pointer duration-300' href="#">Resources</a>
          </div>
        </div>
        <div>
          <img className='laptop:hidden size-10' src={menu} alt="Menu" onClick={() => setToggleMenu(!togglemenu)} />
          <div className='hidden laptop:flex items-center gap-5'>
            <button className='text-GrayishViolet poppins-semibold'>Login</button>
            <button className='text-white px-5 py-2 bg-Cyan rounded-full hover:bg-cyan-200 duration-300 poppins-semibold'>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar