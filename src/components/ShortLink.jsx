import React from 'react'
import { motion } from 'motion/react';

const ShortLink = ({ urlObj, index, copiedIndex, setCopiedIndex }) => {
  const handleCopyToClipboard = (url, index) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedIndex(index); 
      setTimeout(() => setCopiedIndex(null), 2000);
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <motion.li 
      key={index} 
      className='my-4 px-5 py-3 bg-white flex flex-col laptop:flex-row laptop:justify-between laptop:items-center rounded-lg'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className='pb-2 laptop:pb-0 text-DarkViolet poppins-semibold'><a href={urlObj.original} target="_blank" rel="noopener noreferrer">{urlObj.original}</a></p>
      <div className='flex flex-col laptop:flex-row justify-center laptop:gap-5 border-t-[1px] laptop:border-none border-stone-600'>
        <p className='py-2 text-Cyan poppins-semibold'><a href={urlObj.shortened} target="_blank" rel="noopener noreferrer">{urlObj.shortened}</a></p>
        <button 
            className={`text-white px-5 laptop:px-10 py-2 ${copiedIndex === index ? 'bg-DarkViolet' : 'bg-Cyan'} ${copiedIndex === index ? 'hover:bg-DarkViolet' : 'hover:bg-cyan-200'} rounded-lg duration-300 poppins-semibold`} 
            onClick={() => handleCopyToClipboard(urlObj.shortened, index)}>  
            {copiedIndex === index ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </motion.li>
  )
}

export default ShortLink