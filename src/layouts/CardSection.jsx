import React from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import CardOne from '../assets/card1.png'
import CardTwo from '../assets/card2.png'
import CardThree from '../assets/card3.png'
import CardFour from '../assets/card4.png'
import CardFive from '../assets/card5.png'


const CardSection = () => {
  return (
    <section className='bg-sixth'>

        <Container>
            
                <div className='flex gap-6 flex-wrap pt-[100px] pb-[100px]'>
                    <div className='bg-transparent w-[370px] h-[395px]'>
                        <h2 className='text-[#141135] text-5xl font-bold font-open pt-2'>What We Do !</h2>
                        <p className='text-[#6C7D93] text-lg font-normal font-open pt-5 pb-14'>We are now a team of strategists, 
                            engineers, designers, and marketers who both use and develop technology </p>
                        <Button text="Contact Us" className="hover:text-primary duration-300"/>
                    </div>
                    <Card image={CardOne} title="Web Design & Dev" text="Social Media has changed the way we interact & do business while creating"/>
                    <Card image={CardTwo} title="Software Dev " text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
                    <Card image={CardThree} title="Content Writing" text="Social Media has changed the way we interact & do business while creating a new avenue."/>
                    <Card image={CardFour} title="Digital Marketing" text="Social Media has changed the way we interact & do business while creating a new avenue."/>
                    <Card image={CardFive} title="Support & Training" text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>

                </div>
                
           
        </Container>







    </section>
  )
}

export default CardSection