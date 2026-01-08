import React from 'react'
import Container from '../components/Container'
import ImpactOne from '../assets/impact1.png'
import ImpactTwo from '../assets/impact2.png'


const Impact = () => {
  return (
    <section className=''>

        <Container>

            <div className='text-center'>
                <h2 className='text-third text-5xl font-bold font-open mt-[100px]'>We create real impact</h2>
                <p className='text-fourth text-lg font-normal font-paprika w-[558px] pt-6 pb-[75px] mx-auto'>
                    We design, build and support websites and apps for clients worldwide. 
                    Create beautiful, eye-catching on-page messages without the need for a developer.</p>
            </div>

            <div className='flex mb-40'>
            <div className='w-1/2'>
            <div className='flex gap-x-8'>
            <img className='w-[63px] h-[63px]' src={ImpactOne} alt=""/>
                <div>
                     <h5 className='text-third text-3xl font-bold font-open'>Competitive analysis</h5>
                     <p className='text-fourth text-lg font-paprika font-normal p-5 w-[343px]'>
                        With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
                </div>
            </div>

           <div className='flex gap-x-8 pt-10'>
            <img className='w-[63px] h-[63px]' src={ImpactTwo} alt=""/>
                <div>
                     <h5 className='text-third text-3xl font-bold font-open'>Competitive analysis</h5>
                     <p className='text-fourth text-lg font-paprika font-normal pt-5 w-[343px]'>
                        With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
                </div>
            </div>

            </div>
            <div className='w-1/2'>
               
               <div className='relative'>
               <div className='bg-[#C4C4C4] w-[228px] h-[274px] rounded-3xl absolute top-[10px] left-0'></div>
               <div className='bg-[#C4C4C4] w-[310px] h-[264px] rounded-3xl border-white-900 border-4 
                               absolute top-[150px] right-[100px]'></div>
               <div className='bg-[#C4C4C4] w-[162px] h-[140px] rounded-3xl  absolute -top-[30px] right-[170px]'></div>
               </div>

            </div>

            </div>





        </Container>









    </section>
  )
}

export default Impact