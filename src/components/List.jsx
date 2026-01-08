import React from 'react'

const List = ({text,className}) => {
  return (
   <>
   <li className={`text-[#EFF4FA] text-lg font-semibold font-open cursor-pointer list-none
   hover:text-primary hover:duration-500 ${className}`}>{text}</li>
   </>
  )
}

export default List