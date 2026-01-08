import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import ChooseToggle from '../components/ChooseToggle'

const Choose = () => {
  return (
    <section className='bg-[#FDFDFD] mb-28'>

        <Container>
            <Flex>
                   <div className='w-1/2 mt-[90px]'>

                       <ChooseToggle className="py-[30px] outline-double"/>
                       <ChooseToggle />
                       <ChooseToggle />
                       <ChooseToggle />

                   </div>
                   <div className='w-1/2 pl-[130px]'>
                            <div>
                                <h3 className='text-[#141135] text-5xl font-bold font-open pt-[100px]'>Why Choose Us</h3>
                                <p className='text-[#726E9E] text-lg font-normal font-paprika w-[393px] pt-[15px] pb-[40px]'>We are now a team of strategists, engineers, 
                                    designers,and marketers who both use and develop 
                                    technology for a variety of client needs.</p>
                                    <Button text="Contact Us" className="hover:text-primary duration-300"/>
                            </div>
                   </div>
            </Flex>
        </Container>





    </section>
  )
}

export default Choose