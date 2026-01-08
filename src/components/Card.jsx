import React from 'react'

const Card = ({image,title,text}) => {
  return (
    <div className='group bg-[#FFFFFF] w-[370px] h-[395px] rounded-[20px] shadow-lg flex flex-col justify-center items-center px-7 hover:bg-seven hover:duration-700'>
        <img src={image} alt=""/>
        <h2 className='group-hover:text-[#FAFAFE] text-[#141135] text-3xl font-bold font-open pt-8'>{title}</h2>
        <p className='group-hover:text-[#E6E5F3] text-fourth text-lg font-normal font-paprika py-6 w-[260px] text-center'>{text}</p>
        <a className='group-hover:text-[#F4F4F5] group-hover:after:bg-[#e8e4e480] text-third text-lg font-bold font-open relative z-10 after:-z-10 
                     after:absolute after:-top-[5px] after:-right-[22px] after:bg-[#97f788] after:w-[40px] after:h-[40px] after:content-[""] 
                     after:rounded-r-full after:hover:w-[140px] after:hover:rounded-l-full after:hover:duration-500' href="">Read more</a>
    </div>
  )
}

export default Card