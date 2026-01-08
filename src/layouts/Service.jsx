import React from 'react'
import Container from '../components/Container'





const Service = () => {
  return (
   <section className='bg-[#F9F9FB] relative -z-20 pb-[100px]'>

   <Container>
    <div className='flex gap-x-8 mb-[100px]'>

                   <div className='bg-[#C4C4C4] w-[270px] h-[350px] rounded-3xl -translate-y-[100px] relative -z-10'></div>
                   <div className='bg-[#C4C4C4] w-[200px] h-[496px] rounded-3xl -translate-y-[100px] relative -z-10'></div>
                   <div className='bg-[#C4C4C4] w-[340px] h-[326px] rounded-3xl -translate-y-[100px] relative -z-10'></div>
                   <div className='bg-[#C4C4C4] w-[270px] h-[482px] rounded-3xl -translate-y-[100px] relative -z-10'></div>
                   
    </div> 

    <div className='flex gap-x-16 relative'>
            <div className='after:w-[3px] after:h-[140px] after:bg-[#4F585F] after:absolute after:top-[15px] after:left-[250px] after:content[""]'>
                <h2 className='text-primary text-[64px] font-extrabold font-open'>53k</h2>
                <h5 className='text-third text-4xl font-bold font-open pt-6'>Happy Client</h5>
            </div>
            <div className='after:w-[3px] after:h-[140px] after:bg-[#4F585F] after:absolute after:top-[15px] after:left-[560px] after:content[""]'>
                <h2 className='text-primary text-[64px] font-extrabold font-open'>10k</h2>
                <h5 className='text-third text-4xl font-bold font-open pt-6'>Projects Done</h5>
            </div>
            <div className='after:w-[3px] after:h-[140px] after:bg-[#4F585F] after:absolute after:top-[15px] after:left-[830px] after:content[""]'>
                <h2 className='text-primary text-[64px] font-extrabold font-open'>120</h2>
                <h5 className='text-third text-4xl font-bold font-open pt-6'>Gets Award</h5>
            </div>
            <div>
                <h2 className='text-primary text-[64px] font-extrabold font-open'>16</h2>
                <h5 className='text-third text-4xl font-bold font-open pt-6'>Operated Years</h5>
            </div>
    </div>

   </Container>

   </section>
  )
}

export default Service