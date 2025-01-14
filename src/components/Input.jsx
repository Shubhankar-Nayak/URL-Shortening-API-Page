import React, { useState } from 'react'
import axios from "axios";
import shortm from '../assets/images/bg-shorten-mobile.svg'
import shortd from '../assets/images/bg-shorten-desktop.svg'

const Input = ({ inputUrl, setInputUrl, error, setError, setURLs }) => {

    const API_KEY = "59YhleHtY5F0wT40XQXixPf64S49lAuELXDYNJPwPyXq71Dm7ZQZWStL4YrL";

    const handleShortenUrl = async () => {
        if (!inputUrl) {
          setError('Please add a link');
          return;
        }
    
        try {
          const response = await axios.post(
            'https://api.tinyurl.com/create',
            { url: inputUrl }, 
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`, 
                'Content-Type': 'application/json',
              },
            }
          );
    
          const shortenedUrl = response.data.data.tiny_url;
          setError('');
          setInputUrl('');
          setURLs((prevURLs) => {
            const updatedURLs = [...prevURLs, { original: inputUrl, shortened: shortenedUrl }];
            return updatedURLs;
          });
        } catch (err) {
          console.error(err);
          setError('Failed to shorten the URL. Please try again.');
        }
      };

  return (
    <div className="w-full flex flex-col items-center split-bg">
      <div className='w-[90%] laptop:w-[75%] h-[20vh] relative flex bg-DarkViolet rounded-xl overflow-hidden'>
          <img className='w-[80%] h-[80%] absolute top-0 right-0 z-0 laptop:hidden' src={shortm} alt="Boost" />
          <img className='w-full h-fit absolute  z-0 hidden laptop:block' src={shortd} alt="Boost" />
          <div className='px-7 laptop:px-[3rem] absolute inset-0 flex flex-col laptop:flex-row justify-center items-center gap-4 z-10'>
            <div className='w-full flex flex-col'>
              <input 
                className={`w-full px-3 py-2 poppins-medium rounded-md outline-none border-2 ${error ? "border-red-500" : "border-white"}`} 
                type="text" 
                placeholder='Shorten a link here...'
                value={inputUrl}
                onChange={(e) => {
                  setInputUrl(e.target.value); 
                  setError("");
                }}  
              />
              <p className='laptop:hidden text-red-500 poppins-medium'>{error}</p>
            </div>
            <button className='w-full laptop:w-[20%] py-2 text-[17px] poppins-semibold bg-Cyan hover:bg-cyan-200 duration-300 text-white rounded-md' onClick={handleShortenUrl}>Shorten It!</button>
          </div>
          <p className='absolute top-24 left-12 hidden laptop:block text-red-500 poppins-medium'>{error}</p>
      </div>
    </div>
  )
}

export default Input