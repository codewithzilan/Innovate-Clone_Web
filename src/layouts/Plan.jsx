import React from 'react'
import Container  from '../components/Container'
import Heading  from '../components/Heading'
import PlanCard from '../components/PlanCard'

const Plan = () => {
  return (
   <section className='py-100 bg-[#F9F9FB]'>
       <Container>
        <div className='pt-[80px] pb-[100px]'>
        <Heading className='text-center pb-16' text="Choose The Right Plan"/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-3 md:mx-0'>
                <PlanCard />
                <PlanCard />
                <PlanCard /> 
                </div>
        
        </div>
       </Container>
   </section>
  )
}

export default Plan