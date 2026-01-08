import React from 'react'
import Flex from '../components/Flex'

const ChooseToggle = ({className}) => {
  return (
    <div className={`flex gap-x-20 px-3 my-5 rounded-lg ${className}`}>

    <div className='relative'>
        <div className='absolute top-1 left-0 rounded-full w-[25px] h-[25px] bg-primary'></div>
        <div className='absolute top-1 left-[15px] rounded-full w-[25px] h-[25px] bg-fifth'></div>
    </div>
    <p className='text-fourth text-lg font-normal font-paprika w-full'>We solve real-world problems dolor sit amet consectetur adipisic through people and the web.</p>
    
   </div> 
    
  )
}

export default ChooseToggle