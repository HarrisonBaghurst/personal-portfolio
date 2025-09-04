import React from 'react'
import Transition from './Transition'
import ScrolledInText from './ScrolledInText'
import Button from './Button'
import ExpandingSelector from './ExpandingSelector'

const TutoringPricing = () => {
const pricingOptions = [
    {
      title: "Book individual lessons",
      subtitle: "£20 / hr",
      text: "Perfect if you'd like felxibility without commitment. Individulal lessons are priced at £20 per hour, allowing you to book sessions as and when you need them. This option is idea if you want to try out tutoring before committing to a block or if you're looking for occasional support to target specific topics."
    },
    {
      title: "Save with block payments",
      subtitle: "£18 / hr",
      text: "If you are looking for regular support, block bookings are a more cost-effective option. You can purchase a block of 5 lessons at £19 per hour or a block of 10 lessons at £18 per hour. Blocks give you consistency in your learning while saving on the hourly rate, making them a great choice for long-term exam preparation or steady progress in maths and programming."
    },
  ]

  return (
    <div className='bg-light-blue'>
      <Transition flipped={true} />

      <div 
      id='lesson-pricing'
      className='
      px-6 py-12 flex flex-col gap-12
      2xl:p-32 2xl:grid 2xl:grid-cols-2 2xl:gap-32 2xl:h-300
      '>
        <div className='flex items-center'>
          <div className='
          flex flex-col 
          gap-6
          2xl:gap-12
          '>  
            <div>
                <ScrolledInText 
                text='Lesson Pricing'
                size='regular'
                center={false}
                />
              <p className='font-bold paragraph-large'>
                Invest in your learning wiht straightforward pricing
              </p>
            </div>
            <p className='paragraph-small'>
              I believe quality tutoring should be clear and accessible. 
              My pricing is straightforward with flexible options to suit different leasrning needs -
              Whether you're preparing for exams, building confidence in a subject or developing new skills.
            </p>
            <Button
            text='Contact Me'
            link=''
            />
          </div>
        </div>
        <div className='flex items-center'>
          <ExpandingSelector 
          options={pricingOptions}
          />
        </div>
      </div>
      <Transition />
    </div>
  )
}

export default TutoringPricing
