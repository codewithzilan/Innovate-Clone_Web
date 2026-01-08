import React from 'react'
import Container from '../components/Container'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navber = () => {
  return (
   <nav className='bg-[#160c6d80] py-[18px] absolute top-0 left-0 z-10 w-full'>

    
   <Container>

   <div className='flex items-center'> 
        <div className='w-3/12'>
        <img src={Logo} alt=""/>
        </div>
        <div className='w-6/12'>

         <div className='flex gap-x-10'>
               <List text="Home"/>
               <List text="About"/>
               <List text="Service"/>
               <List text="Portfolio"/>
               <List text="Price"/>
               <List text="Blog"/>
        </div>

        </div>
        <div className='w-3/12'>

        <div>
          <Button text="Contact Us" className='ml-32'/>
        </div>

        </div>
   </div>

   </Container>

   </nav>
  )
}

export default Navber