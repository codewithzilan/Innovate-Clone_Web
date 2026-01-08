import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'



const Banner = () => {
  return (
   
    <section className='relative bg-banner bg-center bg-no-repeat bg-cover pt-[500px] pb-[394px] w-full'>
        <div className='absolute top-0 left-0 bg-[#6b62c5e6] w-full'>

            <Container>

            <div className='text-center mb-[172px] mt-[190px]'>

        <h1 className='text-[74px] text-[#FAFAFE] font-bold font-open mx-auto'>YOU'RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
        <p className='text-2xl text-[#E6E5F3] font-paprika font-normal mx-auto w-[715px] p-[45px] leading-10'>A beautiful website passionately crafted for 
            your small business.Our Digital Agency development has changed the way brands and businesses use technology for 
            growing business.</p>
        <div className='flex justify-center gap-x-5'>
         <Button text="Get free quote"/>
         <Button text="Learn more"/>
        </div>

           </div>

        </Container>

        </div>

        


    </section>


  )
}

export default Banner